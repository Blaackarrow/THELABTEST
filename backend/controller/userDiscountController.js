const userDiscountModel = require("../models/userDiscountModel");

const userDiscountController = {
  getUserDiscount: async (req, res) => {
    try {
      const result = await userDiscountModel.queryGetAlluserDiscount();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).res(error);
    }
  },

  addUserDiscount: async (req, res) => {
    try {
      const userDiscount = req.body;
      const result = await userDiscountModel.queryAddUserDiscount(userDiscount);
      const [updateResult] = await userDiscountModel.decrementdiscountQuantity(
        userDiscount.discount_id
      );
      // console.log('stockEvent', stockEvent);
      // console.log('result', result);
      // console.log('updateResult', updateResult);
      if (updateResult.affectedRows) {
        res.json({ message: "Code promos utilisé" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },
};

module.exports = userDiscountController;
