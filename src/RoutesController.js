import { Route, Routes } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import MoviePage from "./pages/MoviePage";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/eachCard" element={<MoviePage />}></Route>
            <Route ></Route>
        </Routes>
    )
}
export default MainRoute;