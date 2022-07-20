import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDocs,
  query,
  limit,
  startAfter,
  orderBy,
} from "@firebase/firestore";
import db from "../firebase";

const initialState = {
  items: [],
  amount: 0,
  price: 0,
  isLoading: true,
};

const lastDoc = null;

export const getPaints = createAsyncThunk("paints/getPaintsItems", () => {
  let itemsArray = [];

  const q = query(
    collection(db, "farby"),
    orderBy("name"),
    startAfter("Samtex szary"),
    limit(4)
  );

  const querySnapshot = getDocs(q)
    .then((res) => {
      res.forEach((doc) => {
        itemsArray.push(doc.data());
        // console.log(doc.id, " => ", doc.data());
      });
      console.log(itemsArray);
      return itemsArray;
    })
    .catch((err) => console.log(err));
  return querySnapshot;
});

const paintSlice = createSlice({
  name: "paints",
  initialState,
  reducers: {},
  extraReducers: {
    [getPaints.pending]: (state) => {
      state.isLoading = true;
    },
    [getPaints.fulfilled]: (state, action) => {
      console.log(action);
      state.items = action.payload;
      state.isLoading = false;
    },
    [getPaints.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default paintSlice.reducer;
