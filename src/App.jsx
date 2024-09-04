import { useState } from "react";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  const [seen, setSeen] = useState([]);
  const POKEMON_COUNT = 151; // Number of first gen pokemon
  const CARD_COUNT = 12;
  const [randomIds, setRandomIds] = useState(generateRandomIds);

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
      console.log("lose");
    }

    setSeen([...array, id]);
    setRandomIds(generateRandomIds);
  }

  return (
    <>
      <nav>
        <h1>Memory Card Game</h1>
      </nav>
      <div className="content">
        {/* <Card id={randomIds[0]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[1]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[2]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[3]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[4]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[5]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[6]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[7]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[8]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[9]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[10]} seen={seen} onChange={onChange}></Card>
        <Card id={randomIds[11]} seen={seen} onChange={onChange}></Card> */}
        {randomIds.map((i) => (
          <Card key={i} seen={seen} onChange={onChange} id={i}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
