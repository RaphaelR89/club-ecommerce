import { FunctionComponent, ButtonHTMLAttributes } from "react";
//Styles
import { CustomButtonContainer, IconContainer } from "./custom-button.styles";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  startIcon?: React.ReactNode;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
