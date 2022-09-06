import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component
import HomePage from "./pages/home/HomePage";

const App: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
