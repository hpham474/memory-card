import Card from "./components/Card";
import "./styles/App.css";

function App() {
  const POKEMON_COUNT = 151; // Number of first gen pokemon

  return (
    <>
      <nav>
        <h1>Memory Card Game</h1>
      </nav>
      <div className="content">
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
        <Card id={Math.floor(Math.random() * POKEMON_COUNT)}></Card>
      </div>
    </>
  );
}

export default App;
