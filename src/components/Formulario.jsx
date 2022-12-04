import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import monedas from '../data/monedas';
import useSelectMoneda from '../hooks/useSelectMoneda';
import Error from './Error';

const Input = styled.input`
    padding: 1rem 0;
    display: block;
    width: 100%;
    background-color: #9497ff;
    border-radius: .5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    font-size: 1.6rem;
    transition: background-color .3s ease;

    &:hover{
        cursor: pointer;
        background-color: #7a7dfe;
    }
`;

const Formulario = ({setValores})=>{

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectComponentMoneda] = useSelectMoneda('Elige una Moneda: ', monedas);
    const [cripto, SelectComponentCripto] = useSelectMoneda('Elige una Criptomoneda: ', criptos); 

    useEffect(()=>{
        const consultarAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;
            const resultado = await fetch(url);
            const {Data} = await resultado.json();

            const criptomonedas = Data.map(data => {
                const {CoinInfo: {Name, FullName}} = data;
                return {id: Name, nombre: FullName};
            })

            setCriptos(criptomonedas);
        }

        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if([moneda, cripto].includes('')){
            setError(true);
            return;
        }

        setError(false);
        setValores({moneda, cripto});
    }

    return (
        <>
        {error && <Error>Los Campos son Obligatorios</Error>}
        <form onSubmit={handleSubmit}>
            <SelectComponentMoneda />
            <SelectComponentCripto />
            <Input value="Cotizar" type="submit"></Input>
        </form>
        </>
    )
}

export default Formulario;