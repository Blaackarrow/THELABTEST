const db = require('../database');


const userModel = {
    queryGetAllUsers: () => {
        return db.query("select * from user");
    },
    queryAddUser: ({ nom, prénom, email, password, is_admin, date_de_naissance }) => {
        return db.query("insert into user(nom, prénom, email, password, is_admin, date_de_naissance) values (?, ?, ?, ?, ?, ?)", [nom, prénom, email, password, is_admin, date_de_naissance]);
    },
    queryGetUserByEmail: (email) => {
        return db.query("select * from user where email = ?", [email]);
    },
};

module.exports = userModel;
