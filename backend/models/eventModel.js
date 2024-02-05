const db = require('../database');

const eventModel = {
    queryGetAllEvents: () => {
        return db.query("select * from event");
    },
    queryAddEvent: ({ city, date, address, quantity }) => {
        return db.query("insert into event(city, date, address, quantity) values (?, ?, ?, ?)", [city, date, address, quantity]);
    },
    queryGetEventById: (id) => {
        return db.query("select * from event where id = ?", [id]);
    },
};

module.exports = eventModel;