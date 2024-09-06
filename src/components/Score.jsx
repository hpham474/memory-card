import PropTypes from "prop-types";
import "../styles/Score.css";

function Score({ score, best }) {
  return (
    <>
      <div className="score">
        <h2>Score: {score}</h2>
        <h2>Best: {best}</h2>
      </div>
    </>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  best: PropTypes.number.isRequired,
};

export default Score;
