import "./scorecard.css";

export default function ScoreCard() {
  return (
    <div className="score_card">
      <h2>Score Card</h2>
      <form className="form_score">
        <input type="file" />
        <button>Ajouter</button>
        <label className="player">
          <p>Player : </p>
        </label>
        <label className="label_score_notes">
          Note Physique:
          <p>50</p>
          Vitesse:
          <p></p>
          Passe:
          <p></p>
          Tir:
          <p></p>
          Dribble:
          <p></p>
          Vista:
          <p></p>
          CF:
          <p></p>
          Plongeon:
          <p></p>
          Arrets:
          <p></p>
          Degat:
          <p></p>
          Pied Faible:
          <p></p>
          Gen:
          <p></p>
        </label>
      </form>
    </div>
  );
}

/* Note Physique:
          <p>${note_physique}</p>
          Vitesse:
          <p>${nnote_vitesse}</p>
          Passe:
          <p>${note_passe}</p>
          Tir:
          <p>${note_tir}</p>
          Dribble:
          <p>${note_dribble}</p>
          Vista:
          <p>${note_vista}</p>
          CF:
          <p>${note_cf}</p>
          Plongeon:
          <p>${note_plongeon}</p>
          Arrets:
          <p>${note_arrets}</p>
          Degat:
          <p>${note_dega}</p>
          Pied Faible:
          <p>${note_pied_faible}</p>
          Gen:
          <p>${note_gen}</p> */
