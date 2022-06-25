import Body from "../components/Body/Body";
import ExpendedMovie from "../components/ExpendedMovie/ExpendedMovie";
import SortByBar from "../components/sortByBar/sortByBar";


const MoviePage = () => {
    return (
        <>
            <ExpendedMovie />
            <SortByBar />
            <Body />
        </>
    )
};

export default MoviePage;