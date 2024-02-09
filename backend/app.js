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
const noteController = require("./controller/NoteController");
//const userEventController = require("./controller/UserEventController");
const scoreCardController = require("./controller/ScoreCardController");

app.get("/users", userController.getAllUsers);
app.get("/events", eventController.getAllEvents);
app.get("/users/:email", userController.getUserByEmail);
app.get("/events/:id", eventController.getEventById);
app.get(`/note`, noteController.getNote);
app.get(`/score_card`, scoreCardController.getScoreCard);
app.get(`/note/:id`, noteController.getNoteById);
app.get(`/score_card/:id`, scoreCardController.getScoreCardById);

app.post("/users", userController.addUser);
app.post("/events", eventController.addEvent);
app.post("/stockEvent", stockEventController.addStockEvent);
app.post(`/note`, noteController.addNote);
app.post(`/score_card`, scoreCardController.addScoreCard);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
