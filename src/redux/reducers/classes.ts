import { requestGetClasses } from "@/services/classes";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface IState {
  loading: boolean;
  data: any;
  error: string;
}

export const fetchDataClasses = createAsyncThunk(
  "/publicImage/list",
  async () => {
    const res = await requestGetClasses();
    return res.data;
  }
);

const initialState: IState = {
  loading: false,
  data: {},
  error: "",
};

const slice = createSlice({
  name: "classes",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataClasses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataClasses.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDataClasses.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
    });
  },
});

export default slice.reducer;
