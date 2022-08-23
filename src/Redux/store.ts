import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import CloseMenu from "./Reducers/CloseMenu";
import SearchSlice from "./Reducers/SearchSlice";
import BooksDetails from "./Reducers/BooksDetails";

export const store = configureStore({
  reducer: {
    Details: BooksDetails,
    searchState: SearchSlice,
    CloseState: CloseMenu,
  },
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
