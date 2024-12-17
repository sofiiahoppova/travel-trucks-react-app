import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/campers");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchDetails",
  async (camperId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/campers/${camperId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
