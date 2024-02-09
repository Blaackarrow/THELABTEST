const db = require("../database/database");

const noteModel = {
  queryGetNote: () => {
    return db.query("select * from note");
  },
  queryAddNote: ({
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
      "insert into note (note_physique, note_vitesse, note_passe, note_tir, note_dribble, note_vista, note_cf, note_plongeon, note_arrets, note_dega, note_pied_faible, note_gen, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
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

  queryGetNoteById: (id) => {
    return db.query("select * from note where id = ?", [id]);
  },
};
module.exports = noteModel;
