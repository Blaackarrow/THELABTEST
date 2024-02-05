const userModel = require("../models/userModel");

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const [users] = await userModel.queryGetAllUsers();
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    addUser: async (req, res) => {
        try {
            const user = req.body;
            const [result] = await userModel.queryAddUser(user);
            if (result.affectedRows) {
                res.json({ message: 'User added' });
            } else {
                res.json({ message: 'Error' });
            }
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    },
    getUserByEmail: async (req, res) => {
        try {
            const email = req.params.email;
            const [user] = await userModel.queryGetUserByEmail(email);
            res.send(user);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    },

};

module.exports = userController;