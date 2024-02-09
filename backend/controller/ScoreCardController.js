const scoreCardModel = require("../models/scoreCardModel");

const scoreCardController = {
  getScoreCard: async (req, res) => {
    try {
      const [score_card] = await scoreCardModel.queryGetScoreCard();
      res.send(score_card);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  addScoreCard: async (req, res) => {
    try {
      const score_card = req.body;
      const [result] = await scoreCardModel.queryAddScoreCard(score_card);
      if (result.affectedRows) {
        res.json({ message: "score card added" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getScoreCardById: async (req, res) => {
    try {
      const { id } = req.params;
      const [score_card] = await scoreCardModel.queryGetScoreCardById(id);
      res.send(score_card);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getScoreCardByNoteId: async (req, res) => {
    try {
      const score_card = req.body;
      const [result] = await scoreCardModel.queryGetScoreCardByNoteId(
        score_card.note_id
      );
      console.log("score_card", score_card);
      console.log("result", result);

      if (result.affectedRows) {
        res.json({ message: "note added to score_card" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },
};
module.exports = scoreCardController;
