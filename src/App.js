import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/eachCard" element={<MoviePage />}></Route>
          <Route ></Route>
        </Routes>

      </div>

    </>
  );
}

export default App;
