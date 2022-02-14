import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/Components/Home/Home";
import Login from "./app/Components/Login/Login";
import Ponto from "./app/modules/ponto/ponto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ponto" element={<Ponto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
