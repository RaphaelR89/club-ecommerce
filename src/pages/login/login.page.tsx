import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../component/custom-button/custom-button.component";
import CustomInput from "../../component/custom-input/custom-input.component";
import { Header } from "../../component/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer>
            <CustomInput placeholder="Digite seu e-mail" />
          </LoginInputContainer>
          <LoginInputContainer>{/* Password Input*/}</LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
