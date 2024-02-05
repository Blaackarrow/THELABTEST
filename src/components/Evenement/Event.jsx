import React, { useState, useEffect } from 'react';
import './event.css';

export default function event() {
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // console.log('selectedEvent', selectedEvent);



  useEffect(() => {
    fetch('http://localhost:5002/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log('data', data);
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  useEffect(() => {
    if (selectedEvent) {
      setIsLoading(true);
      fetch(`http://localhost:5002/users?email=${email}`)
        .then(response => response.json())
        .then(data => {
          const user = Array.isArray(data) ? data.find(user => user.email === email) : data;
          // console.log('data:>>', data);
          // console.log('email', email);
          // console.log('user:>>', user);
          if (user) {
            const userId = user.id;
            const eventId = selectedEvent;
            const dataSend = {
              event_id: eventId,
              user_id: userId
            };
            fetch('http://localhost:5002/stockEvent', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataSend)
            })
              .then(response => response.json())
              .then(data => {
                console.log('succes', data)
              })
              .then(() => setSelectedEvent(null))
              .catch((error) => {
                console.error('Error:', error)
              });

          } else {
            console.error('Aucun utilisateur trouvé avec cet email');
          }
        })
        .catch(error => console.error('Error:', error))
    }
  }, [selectedEvent, email]);
  // console.log('selectedEvent :>>', selectedEvent);
  // console.log('response', response);
  // console.log('data', data);
  // console.log('userId :>>', userId);


  return (
    <>
      <h2>EVENEMENT</h2>
      <input type="text" placeholder='Votre Adresse mail' onChange={e => setEmail(e.target.value)} />
      <div className='event'>
        {events.map((event, index) => (
          <div key={index} className='event-card'>
            <h3>{event.city}</h3>
            <p>{event.date}</p>
            <p>{event.address}</p>
            <p>QUANTITE : {event.quantity}</p>
            <button onClick={() => setSelectedEvent(event.id)}>SELECTIONNER</button>
          </div>
        ))}
      </div>
    </>
  )
}
