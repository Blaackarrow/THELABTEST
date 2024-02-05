const db = require('../database');

const stockEventModel = {
    queryGetAllStockEvents: () => {
        return db.query("SELECT * FROM stockEvent");
    },
    queryAddStockEvent: ({ event_id, user_id }) => {
        return db.query("INSERT INTO stockEvent(event_id, user_id) VALUES (?, ?)", [event_id, user_id]);
    },
    decrementEventQuantity: (event_id) => {
        return db.query("UPDATE event SET quantity = quantity - 1 WHERE id = ?", [event_id]);
    },
    checkUserEvent: ({ event_id, user_id }) => {
        return db.query("SELECT * FROM stockEvent WHERE event_id = ? AND user_id = ?", [event_id, user_id]);
    }
};
module.exports = stockEventModel;