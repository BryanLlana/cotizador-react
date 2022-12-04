import styled from "@emotion/styled";

const Contenedor = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
`;

const Imagen = styled.img`
    width: 100%;
    margin-top: 5rem;
`;

const Precio = styled.p`
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;

    & span{
        font-size: 2rem;
    }
`;

const Texto = styled.p`
    font-size: 1.5rem;
    color: #fff;

    & span{
        font-size: 1.3rem;
    }
`;

const Resultado = ({datos}) => {

    const {HIGHDAY, LOWDAY, CHANGEPCTHOUR, LASTUPDATE, PRICE, IMAGEURL} = datos;
    console.log(IMAGEURL);

    return (
        <Contenedor>
            <Imagen src={`https://www.cryptocompare.com${IMAGEURL}`}/>
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación ultimas 24 horas: <span>{CHANGEPCTHOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado;