import styled from '@emotion/styled';

const Alerta = styled.div`
    padding: 1rem;
    background-color: #b7322c;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
`;

const Error = ({children}) => {
    return (
        <Alerta>{children}</Alerta>
    )
}

export default Error;