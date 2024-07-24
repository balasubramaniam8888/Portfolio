import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Skills from "./Pages/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/Skills" element={<Skills></Skills>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
