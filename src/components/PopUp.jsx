import PropTypes from "prop-types";

function PopUp({ score, dialog, setScore }) {
  function closeDialog() {
    dialog.current.close();
    setScore([]);
  }

  return (
    <>
      <dialog ref={dialog}>
        <h3>Game Over</h3>
        <p>You got a score of {score}</p>
        <button onClick={closeDialog}>Close</button>
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
