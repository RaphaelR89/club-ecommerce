import { FunctionComponent } from "react";
import { ErrorMessageContainer } from "./input-error-message.styles";

interface InputErrorMessageProps {
  children?: string;
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children,
}) => {
  return (
    <>
      <ErrorMessageContainer>{children}</ErrorMessageContainer>
    </>
  );
};
export default InputErrorMessage;
