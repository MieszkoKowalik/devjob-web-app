import React from "react";
import { InputWrapper } from "./InputWithIcon.styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  className?: string;
}

const InputWithIcon = ({ icon, className, ...props }: Props) => {
  return (
    <InputWrapper className={className}>
      {icon}
      <input {...props} />
    </InputWrapper>
  );
};

export default InputWithIcon;
