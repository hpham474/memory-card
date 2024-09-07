import PropTypes from "prop-types";
import "../styles/PopUp.css";

function PopUp({ score, dialog, setScore }) {
  function closeDialog() {
    if (dialog.current) {
      dialog.current.close();
      setScore([]);
    }
  }

  return (
    <>
      <dialog ref={dialog}>
        <div className="gameOver">
          <h3>Game Over</h3>
          <p>You got a score of {score}</p>
          <button onClick={closeDialog}>Close</button>
        </div>
      </dialog>
    </>
  );
}

PopUp.propTypes = {
  score: PropTypes.number.isRequired,
  dialog: PropTypes.object.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default PopUp;
