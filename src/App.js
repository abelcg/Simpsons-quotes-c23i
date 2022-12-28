import logo from './logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/button";
import Quotes from './components/Quotes';

function App() {

  const character = {
    quote: "They taste like...burning.",
    character: "Ralph Wiggum",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection: "Left"
  }

  return (
    <section className="container my-5 d-flex flex-column align-items-center">
      <img src={logo} alt="The Simpsons logo" />
      <Button
        variant="warning"
        className="my-5 px-1 w-50"
      >
        Get Quotes
      </Button>
      <Quotes character={character}></Quotes>
    </section>
  );
}

export default App;
