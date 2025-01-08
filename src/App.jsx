import "./App.css";
import HomePage from "./homepage";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
