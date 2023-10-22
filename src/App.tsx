import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";
import Love from "./pages/Love";
import { Root } from "./pages/Root";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Root />} />
          <Route path={`/cvdeck`} element={<Home />} />
          <Route path={`/cvdeck/standard`} element={<Play />} />
          <Route path={`/cvdeck/love`} element={<Love />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
