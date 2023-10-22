import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";
import Love from "./pages/Love";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/standard`} element={<Play />} />
          <Route path={`/love`} element={<Love />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
