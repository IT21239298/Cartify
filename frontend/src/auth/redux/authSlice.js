import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";
import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding token", error);
    return null;
  }
};

const getUserRoles = (token) => {
  const decodedToken = decodeToken(token);
  return decodedToken ? decodedToken.roles : [];
};

const initialState = {
  loading: false,
  userInfo: localStorage.getItem("userInfo") || null,
  userToken: localStorage.getItem("userToken") || null,
  userRoles: getUserRoles(localStorage.getItem("userToken")) || [],
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.userRoles = [];
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    setRoles: (state, { payload }) => {
      state.userRoles = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.userInfo;
        state.userToken = payload.userToken;
        state.userRoles = getUserRoles(payload.userToken);
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setCredentials, logout, setRoles } = authSlice.actions;
export default authSlice.reducer;
