import { getUserList } from "apis/admin-management";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let initialState = {
  dsNguoiDung: [],
  isLoading: false,
};
export const getUserListActionService = createAsyncThunk(
  "nguoiDung/getUserList",
  async () => {
    let response = await getUserList();
    return response.content;
  }
);
const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    setDanhSachNguoiDung: (state, action) => {
      state.dsNguoiDung = action.payload;
    },
  },
  extraReducers: {
    [getUserListActionService.fulfilled]: (state, action) => {
      state.dsNguoiDung = action.payload;
    },
    [getUserListActionService.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { setDanhSachNguoiDung } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
