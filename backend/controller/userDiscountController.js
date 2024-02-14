const discountModel = require("../models/discountModel");
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

      const [date] = await discountModel.queryGetAllDiscount();
      // console.log("duree_de_validite", test[0].duree_de_validite);

      // console.log("Date.now()", Date.now());

      // Obtenir la date actuelle
      let dateActuelle = new Date();
      // let dateFormatee = dateActuelle.toISOString();

      // console.log(dateFormatee);

      // const [updateResult] = await userDiscountModel.decrementdiscountQuantity(
      //   userDiscount.discount_id
      // );
      // console.log('result', result);
      // console.log('updateResult', updateResult);
      // date.map((dates) => {
      //   dates.duree_de_validite;
      //   // console.log("dates.duree_de_validite");
      //   let dateValidite = new Date(dates.duree_de_validite);
      //   console.log("dateValidite", dateValidite);
      //   console.log("dateFormatee", dateFormatee);
      // });
      let dateValidite = new Date(
        date[userDiscount.discount_id - 1].duree_de_validite
      );
      // console.log("dateValidite", dateValidite);
      // console.log("dateActuelle", dateActuelle);
      // console.log(
      //   "dateActuelle <= dateValidite",
      //   dateActuelle.getTime() <= dateValidite.getTime()
      // );
      // console.log(
      //   "dateActuelle > dateValidite",
      //   dateActuelle.getTime() > dateValidite.getTime()
      // );

      if (dateActuelle.getTime() <= dateValidite.getTime()) {
        const result = await userDiscountModel.queryAddUserDiscount(
          userDiscount
        );
        const [updateResult] =
          await userDiscountModel.decrementdiscountQuantity(
            userDiscount.discount_id
          );
        if (updateResult.affectedRows) {
          res.json({ message: "Code promos utilisé" });
        } else {
          res.json({ message: "Code promos invalide" });
        }
      } else {
        res.json({ message: "Code promo expiré" });
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },
};

module.exports = userDiscountController;
