import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading: false,
    movies: [],
    error: ''
}

const fetchAPI = async (searchText, searchBy) => {
    //console.log(searchText, searchBy);
    const url = `https://reactjs-cdp.herokuapp.com/movies?search=
    ${searchText}&searchBy=${searchBy}`;
    const apiResponse = await axios.get(url);
    console.log(apiResponse.data.data);
    return apiResponse.data.data;
}
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (data) => {
    const { searchText, searchBy } = data;
    const response = await fetchAPI(searchText, searchBy);
    return response;
})

const asyncApiCaller = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        sortByRating: (state, action) => {
            console.log("Inside action");
            console.log(action.payload);
            if (action.payload.val === 1) {
                state.movies.sort((a, b) => b.vote_average - a.vote_average);
            } else {
                state.movies.sort((a, b) => {
                    let dateA = new Date(a.release_date),
                        dateB = new Date(b.release_date);
                    return dateB - dateA;
                });
            }
        },
    },
    extraReducers: {
        [fetchMovies.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = "success";
            state.movies = action.payload;
        },
        [fetchMovies.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
})


/* const fetchAPI = async (searchText, searchBy) => {
    console.log(searchText, searchBy);
    const url =
        "https://reactjs-cdp.herokuapp.com/movies?search=" +
        searchText +
        "&searchBy=" +
        searchBy;

    const res = await axios.get(url);
    // data = res.data;
    console.log(res.data.data);
    return res.data.data;
};

// First, create the thunk
export const fetchMovies = createAsyncThunk(
    "movies/getMovies",
    async (data) => {
        const { searchText, searchBy } = data;
        const response = await fetchAPI(searchText, searchBy);
        return response;
    }
);

// Then, handle actions in your reducers:
const asyncApiCaller = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: null,
    },
    reducers: {
        sortByRating: (state, action) => {
            console.log("Inside action");
            console.log(action.payload);
            if (action.payload.val === 1) {
                state.movies.sort((a, b) => b.vote_average - a.vote_average);
            } else {
                state.movies.sort((a, b) => {
                    let dateA = new Date(a.release_date),
                        dateB = new Date(b.release_date);
                    return dateB - dateA;
                });
            }
        },
    },
    extraReducers: {
        [fetchMovies.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = "success";
            state.movies = action.payload;
        },
        [fetchMovies.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
}); */

export const { sortByRating } = asyncApiCaller.actions;
export default asyncApiCaller.reducer;
// Later, dispatch the thunk as needed in the app
