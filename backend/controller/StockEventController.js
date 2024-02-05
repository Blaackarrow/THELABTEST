const stockEventModel = require('../models/stockEventModel');

const stockEventController = {
    addStockEvent: async (req, res) => {
        try {
            const stockEvent = req.body;
            const result = await stockEventModel.queryAddStockEvent(stockEvent);
            const [updateResult] = await stockEventModel.decrementEventQuantity(stockEvent.event_id);
            // console.log('stockEvent', stockEvent);
            // console.log('result', result);
            // console.log('updateResult', updateResult);
            if (updateResult.affectedRows) {
                res.json({ message: 'Utilisateur ajouté dans Evenement' });
            } else {
                res.json({ message: 'Error' });
            }
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    },
};

module.exports = stockEventController;