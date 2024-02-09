const db = require("../database/database");

const discountModel = {
  queryGetAllDiscount: () => {
    return db.query("select * from discount");
  },
  queryAddDiscount: ({
    percent_value,
    promo_code,
    quantity,
    duree_de_validite,
    payment_id,
  }) => {
    return db.query(
      "insert into discount(percent_value, promo_code, quantity, duree_de_validite, payment_id) values (?, ?, ?, ?, ?)",
      [percent_value, promo_code, quantity, duree_de_validite, payment_id]
    );
  },
};

module.exports = discountModel;
