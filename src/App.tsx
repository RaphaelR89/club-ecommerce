import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./component/sign-up/sign-up.page";

const App: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
