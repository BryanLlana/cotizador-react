import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import IconoCripto from './img/imagen-criptos.png';

const Contenedor = styled.div`
  width: 90%;
  max-width: 90rem;
  margin: 10rem auto;

  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  width: 100%;
`;

const Heading = styled.h1`
  font-weight: 900;
  color: #fff;
  font-size: 2.8rem;
  text-align: center;

  &::after{
    content: '';
    width: 10rem;
    height: .6rem;
    background-color: #66a2fe;
    display: block;
    margin: 1rem auto 0 auto;
  }
`;

function App() {

  const [valores, setValores] = useState({});
  const [datos, setDatos] = useState({});

  useEffect(()=>{
      if(Object.keys(valores).length > 0){
        const consultarAPI = async()=>{
            const {moneda, cripto} = valores;
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
            const respuesta = await fetch(url);
            const {DISPLAY} = await respuesta.json();
            const {HIGHDAY, LOWDAY, CHANGEPCTHOUR, LASTUPDATE, PRICE, IMAGEURL} = DISPLAY[cripto][moneda];

            setDatos({HIGHDAY, LOWDAY, CHANGEPCTHOUR, LASTUPDATE, PRICE, IMAGEURL})
        }
  
        consultarAPI();
      }
  }, [valores]);

  return (
    <Contenedor>
      <Imagen src={IconoCripto}/>
      <div>
        <Heading>Cotizador de CriptoMonedas</Heading>
        <Formulario setValores={setValores}/>
        {datos.HIGHDAY && <Resultado datos={datos} />}
      </div>
    </Contenedor>
  )
}

export default App
