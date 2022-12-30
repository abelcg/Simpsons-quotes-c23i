import logo from './logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/button";
import Quotes from './components/Quotes';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  /* const character = {
    quote: "They taste like...burning.",
    character: "Ralph Wiggum",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection: "Left"
  } */
  
  useEffect(()=>{
    //aqui haré la consulta a la API
    APIrequest();
  }, [])

  const APIrequest = async ()=>{
   setLoading(false);
   const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
   console.log(response);
   const data = await response.json();
   console.log(data[0]);
   setTimeout(()=>{
     setCharacter(data[0]);
     setLoading(true);
   },1500);
  }
  //operador ternario
  //(condición lógica) ? (código a ejecutar cuando es verdadero (true)) : (código a ejecutar cuando false)
  const showComponent = loading ? <Quotes character={character}></Quotes> :  <Spinner/>

  return (
    <section className="container my-5 d-flex flex-column align-items-center">
      <img src={logo} alt="The Simpsons logo" />
      <Button
        variant="warning"
        className="my-5 px-1 w-50"
        onClick={() => APIrequest()}
      >
        Get Quotes
      </Button>
     {showComponent}   
    </section>
  );
}

export default App;
