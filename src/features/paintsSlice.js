import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDocs,
  query,
  limit,
  startAfter,
  startAt,
  orderBy,
} from "@firebase/firestore";
import db from "../firebase";
import { useSelector } from "react-redux";

const initialState = {
  items: [],
  amount: 0,
  price: 0,
  isLoading: true,
  lastDoc: "",
  page: 1,
};

export const getPaints = createAsyncThunk(
  "paints/getPaintsItems",
  (lastDoc) => {
    let itemsArray = [];
    const q = query(
      collection(db, "farby"),
      orderBy("name"),
      startAt(lastDoc),
      limit(4)
    );
    //
    const querySnapshot = getDocs(q)
      .then((res) => {
        res.forEach((doc) => {
          itemsArray.push(doc.data());
        });
        return { itemsArray };
      })
      .catch((err) => console.log(err));
    return querySnapshot;
  }
);

const paintSlice = createSlice({
  name: "paints",
  initialState,
  reducers: {
    increasePage: (state, { payload }) => {
      state.page++;
      state.lastDoc = payload;
    },
    decreasePage: (state) => {
      state.page--;
    },
  },
  extraReducers: {
    [getPaints.pending]: (state) => {
      state.isLoading = true;
    },
    [getPaints.fulfilled]: (state, action) => {
      console.log(action);
      state.items = action.payload.itemsArray;
      state.isLoading = false;
    },
    [getPaints.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { increasePage, decreasePage } = paintSlice.actions;

export default paintSlice.reducer;
