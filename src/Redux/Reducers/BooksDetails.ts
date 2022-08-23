import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesT } from "../../common/typed";
import { RootState } from "../store";

export const FetchBooksDetails = createAsyncThunk<MoviesT[], any>(
  "Books/BooksDetails",
  async (id: number) => {
    const res = await fetch(`https://gutendex.com/books?ids=${id}`);
    const data: MoviesT[] = await res.json();
    return data;
  }
);

type MoveisType = {
  status: "loading" | "idle";
  BooksDetails: any;
};

const initialState = {
  BooksDetails: [],

  status: "idle",
} as MoveisType;

const Booksdetails = createSlice({
  name: "movie",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(FetchBooksDetails.fulfilled, (state, { payload }) => {
      state.BooksDetails = payload;
      state.status = "idle";
    });
  },
});
export const selectStatus = (state: RootState) => state.Details.BooksDetails;

export default Booksdetails.reducer;
