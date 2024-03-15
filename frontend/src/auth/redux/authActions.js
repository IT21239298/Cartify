// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURI } from "../../const/endpoint";

const backendURL = baseURI;

export const registerUser = createAsyncThunk(
  "api/signup",
  async ({ firstName,lastName,email,password,confirmPassword,image, }, { rejectWithValue }) => {
    try {
      console.log(firstName,lastName,email,password,confirmPassword,image,);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}api/signup`,
        { firstName,lastName,email,password,confirmPassword,image, },
        config
      );
    } catch (error) {
      // return custom error message from backend if present
      console.log("error", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userLogin = createAsyncThunk(
  'api/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        `${backendURL}api/login`,
        { email, password },
        config
      );

      // Check if response contains data and token
      if (response && response.data && response.data.token) {
        const { data } = response;
        // Store user data in local storage (including token)
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        // Return the data from the API response
        return data;
      } else {
        // Return custom error if token is not present in response
        return rejectWithValue('Token not found in response');
      }
    } catch (error) {
      // Return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
