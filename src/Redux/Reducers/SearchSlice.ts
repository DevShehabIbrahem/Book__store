import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesT } from "../../common/typed";
import { RootState } from "../store";

export const SearchBooks = createAsyncThunk<MoviesT[], any>(
  "search/SearchSlice",
  async (term: string) => {
    const res = await fetch(`https://gutendex.com//books?search=${term}`);
    const data: MoviesT[] = await res.json();
    return data;
  }
);

type MoveisType = {
  status: "loading" | "idle";
  SearchResult: any;
};

const initialState = {
  SearchResult: [],

  status: "idle",
} as MoveisType;

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(SearchBooks.fulfilled, (state, { payload }) => {
      state.SearchResult = payload;
      state.status = "idle";
    });
  },
});
export const SearchState = (state: RootState) => state.searchState.SearchResult;

export default SearchSlice.reducer;
