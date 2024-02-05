const eventModel = require('../models/eventModel');

const eventController = {
    getAllEvents: async (req, res) => {
        try {
            const [events] = await eventModel.queryGetAllEvents();
            res.send(events);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    addEvent: async (req, res) => {
        try {
            const event = req.body;
            const [result] = await eventModel.queryAddEvent(event);
            console.log('event', event);
            console.log('result', result);
            if (result.affectedRows) {
                console.log('result.affectedRows', result.affectedRows);
                res.json({ message: 'Event added' });
            } else {
                res.json({ message: 'Error' });
            }
        } catch (error) {
            res.status(500).json({ error: error.toString() });
            console.error(error);
        }
    },
    getEventById: async (req, res) => {
        try {
            const { id } = req.params;
            const [event] = await eventModel.queryGetEventById(id);
            res.send(event);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};
module.exports = eventController;