import axios from "axios";
import { Pizza, SearchPizzaParams } from "../redux/pizza/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://64b926cd79b7c9def6c0a704.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}${search}`
    );
    return data;
  }
);
