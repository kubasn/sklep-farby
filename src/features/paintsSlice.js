import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
  startAt,
  endBefore,
  limitToLast,
  endAt,
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
      startAfter(lastDoc),
      limit(4)
    );
    //
    const querySnapshot = getDocs(q)
      .then((res) => {
        res.forEach((doc) => {
          let item = doc.data();
          item.id = doc.id;
          itemsArray.push(item);
        });
        return { itemsArray };
      })
      .catch((err) => console.log(err));
    return querySnapshot;
  }
);

export const getprevPaints = createAsyncThunk(
  "paints/getprevPaintsItems",
  (lastDoc) => {
    let itemsArray = [];
    const q = query(
      collection(db, "farby"),
      orderBy("name"),
      endAt(lastDoc),
      limit(4)
    );
    //
    console.log(q);
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
    [getprevPaints.pending]: (state) => {
      state.isLoading = true;
    },
    [getprevPaints.fulfilled]: (state, action) => {
      console.log(action);
      state.items = action.payload.itemsArray;
      state.isLoading = false;
    },
    [getprevPaints.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { increasePage, decreasePage } = paintSlice.actions;

export default paintSlice.reducer;
