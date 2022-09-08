import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/login.page";

const App: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
