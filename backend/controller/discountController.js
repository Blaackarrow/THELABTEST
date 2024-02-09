const discountModel = require("../models/discountModel");

const discountController = {
  getAllDiscount: async (req, res) => {
    try {
      const [discount] = await discountModel.queryGetAllDiscount();
      console.log("discount", discount);
      if (discount) {
        res.send(discount);
      } else {
        res.status(404);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  addDiscount: async (req, res) => {
    try {
      const promo = req.body;
      const [result] = await discountModel.queryAddDiscount(promo);
      console.log("result", result);
      if (result.affectedRows) {
        console.log("result.affectedRows", result.affectedRows);
        res.json({ message: "discount added" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
module.exports = discountController;
