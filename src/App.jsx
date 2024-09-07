import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Score from "./components/Score";
import PopUp from "./components/PopUp";
import "./styles/App.css";

function App() {
  useEffect(() => {
    document.title = "Pokemon Memory Card Game";
  }, []);

  const [seen, setSeen] = useState([]);
  const [best, setBest] = useState(0);
  const POKEMON_COUNT = 151; // Number of first gen pokemon (151)
  const CARD_COUNT = 12;
  const [randomIds, setRandomIds] = useState(generateRandomIds);
  const dialog = useRef(null);

  function generateRandomIds() {
    const ids = [];
    while (ids.length < CARD_COUNT) {
      let randomInt = Math.floor(Math.random() * POKEMON_COUNT);
      if (!ids.includes(randomInt)) {
        ids.push(randomInt);
      }
    }

    return ids;
  }

  function onChange(id, array) {
    if (array.includes(id)) {
      if (seen.length > best) {
        setBest(seen.length);
      }
      if (dialog.current) {
        dialog.current.showModal();
      }
    } else {
      setSeen([...array, id]);
    }
    setRandomIds(generateRandomIds());
  }

  return (
    <>
      <nav>
        <h1>Memory Card Game</h1>
        <Score score={seen.length} best={best}></Score>
      </nav>
      <div className="content">
        {randomIds.map((i) => (
          <Card key={i} seen={seen} onChange={onChange} id={i}></Card>
        ))}
      </div>
      <PopUp score={seen.length} dialog={dialog} setScore={setSeen}></PopUp>
    </>
  );
}

export default App;
