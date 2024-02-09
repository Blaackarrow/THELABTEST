const db = require("../database/database");

const userDiscountModel = {
  queryGetAlluserDiscount: () => {
    return db.query("SELECT * FROM user_discount");
  },
  queryAddUserDiscount: ({ user_id, discount_id }) => {
    return db.query(
      "INSERT INTO user_discount(user_id, discount_id) VALUES (?, ?)",
      [user_id, discount_id]
    );
  },
  decrementdiscountQuantity: (discount_id) => {
    return db.query(
      "UPDATE discount SET quantity = quantity - 1 WHERE id = ?",
      [discount_id]
    );
  },
  checkUserDiscount: ({ user_id, discount_id }) => {
    return db.query(
      "SELECT * FROM user_discount WHERE user_id = ? AND discount_id = ?",
      [user_id, discount_id]
    );
  },
};
module.exports = userDiscountModel;
