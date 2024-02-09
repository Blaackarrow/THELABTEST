const db = require("../database/database");

const scoreCardModel = {
  queryGetScoreCard: () => {
    return db.query("select * from score_card");
  },
  queryAddScoreCard: ({ photo_user, note_id }) => {
    return db.query(
      "insert into score_card (photo_user, note_id ) values (?, ?)",
      [photo_user, note_id]
    );
  },
  queryGetScoreCardById: (id) => {
    return db.query("select * from score_card where id = ?", [id]);
  },

  queryGetScoreCardByNoteId: ({
    photo_user,
    note_id,
    note_physique,
    note_vitesse,
    note_passe,
    note_tir,
    note_dribble,
    note_vista,
    note_cf,
    note_plongeon,
    note_arrets,
    note_dega,
    note_pied_faible,
    note_gen,
    user_id,
  }) => {
    return db.query(
      "SELECT n.*, sc.photo_user FROM note n INNER JOIN score_card sc ON n.id = sc.note_id WHERE id = ?",
      [
        photo_user,
        note_id,
        note_physique,
        note_vitesse,
        note_passe,
        note_tir,
        note_dribble,
        note_vista,
        note_cf,
        note_plongeon,
        note_arrets,
        note_dega,
        note_pied_faible,
        note_gen,
        user_id,
      ]
    );
  },
};
module.exports = scoreCardModel;
