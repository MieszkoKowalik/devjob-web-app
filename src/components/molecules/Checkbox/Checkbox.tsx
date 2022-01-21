import React from "react";
import { StyledLabel } from "./Checkbox.styles";
interface Props {
  isChecked: boolean;
  name: string;
  id: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ isChecked, value, name, id, onChange, label }: Props) => {
  return (
    <StyledLabel htmlFor={id}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        name={name}
        value={value}
        id={id}
      />
      <span></span>
      {label}
    </StyledLabel>
  );
};

export default Checkbox;
