import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
    display: block;
    color: #fff;
    font-size: 2.5rem;
    padding-bottom: 1.5rem;
`;

const Select = styled.select`
    width: 100%;
    padding: 1rem;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
`;

const useSelectMoneda = (msg, opciones) => {

    const [valor, setValor] = useState('');

    const SelectComponent = () => {
        return (
            <div>
                <Label>{msg}</Label>
                <Select value={valor} onChange={e=>setValor(e.target.value)}>
                    <option value=''>--Seleccione--</option>
                    {opciones.map(opcion=>
                        <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                    )}
                </Select>
            </div>
        )
    }

    return [valor, SelectComponent];
}

export default useSelectMoneda;