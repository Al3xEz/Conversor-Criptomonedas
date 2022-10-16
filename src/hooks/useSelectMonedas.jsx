import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Lato", "sans-serif";
  color: #343a40;
  font-weight: 700;
  display: block;
  font-size: 24px;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 10px;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <Select
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      >
        <option value="">Seleccione</option>
        {opciones.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
