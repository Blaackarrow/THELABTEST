import { useEffect, useState } from "react";
import React from 'react'

export default function AddEvent() {
    const [inputCityValue, setInputCityValue] = useState('');
    const [inputDateValue, setInputDateValue] = useState('');
    const [inputAddressValue, setInputAddressValue] = useState('');
    const [inputPlacesValue, setInputPlacesValue] = useState('');
    const [events, setEvents] = useState({});

    const handleCityChange = (e) => {
        setInputCityValue(e.target.value);
    };
    const handleDateChange = (e) => {
        setInputDateValue(e.target.value);
    };
    const handleAddressChange = (e) => {
        setInputAddressValue(e.target.value);
    };
    const handlePlacesChange = (e) => {
        setInputPlacesValue(e.target.value);
    };
    const handleClick = (e) => {
        const event = {
            city: inputCityValue,
            date: inputDateValue,
            address: inputAddressValue,
            quantity: inputPlacesValue,
        };
        setEvents(event);
        console.log('events', events);
    };
    useEffect(() => {
        fetch('http://localhost:5002/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(events),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [events]);


    return (
        <>
            <div className='addEvent'>
                <h3>AJOUTER UN EVENEMENT</h3>
                <input type="text" placeholder='Ville de Event' onChange={handleCityChange} />
                <input type="date" placeholder='Date Event' onChange={handleDateChange} />
                <input type="text" placeholder='Adresse de Event' onChange={handleAddressChange} />
                <input type="text" placeholder='Nombre de Places' onChange={handlePlacesChange} />
                <button onClick={handleClick}>AJOUTER</button>
            </div>

        </>
    )
}
