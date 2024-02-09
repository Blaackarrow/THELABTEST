const express = require("express");
require("dotenv").config();
const cors = require("cors");

const port = process.env.APP_PORT;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const userController = require("./controller/userCOntroller");
const eventController = require("./controller/EventController");
const stockEventController = require("./controller/StockEventController");
const discountController = require("./controller/discountController");
const userDiscountController = require("./controller/userDiscountController");

app.get("/users", userController.getAllUsers);
app.get("/events", eventController.getAllEvents);
app.get("/users/:email", userController.getUserByEmail);
app.get("/events/:id", eventController.getEventById);

app.post("/users", userController.addUser);
app.post("/events", eventController.addEvent);
app.post("/stockEvent", stockEventController.addStockEvent);

app.get("/discount", discountController.getAllDiscount);
app.post("/discount", discountController.addDiscount);
app.get("/userDiscount", userDiscountController.getUserDiscount);
app.post("/userDiscount", userDiscountController.addUserDiscount);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
