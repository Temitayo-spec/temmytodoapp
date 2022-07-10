"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 6627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dX": () => (/* binding */ authReducer),
  "x4": () => (/* binding */ auth_login),
  "kS": () => (/* binding */ auth_logout),
  "z2": () => (/* binding */ auth_register),
  "mc": () => (/* binding */ auth_reset)
});

// UNUSED EXPORTS: authSlice, isError, isLoading, isSuccess, message, user

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./plugins/authService.js

const API_URL = "http://localhost:5000/api/users/";
//Register user
const register = async (userData)=>{
    const response = await external_axios_default().post(API_URL, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
//Register user
const login = async (userData)=>{
    const response = await external_axios_default().post(API_URL + "login", userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
// Logout user
const logout = ()=>{
    localStorage.removeItem("user");
};
const authService = {
    register,
    logout,
    login
};
/* harmony default export */ const plugins_authService = (authService);

;// CONCATENATED MODULE: ./store/auth.js


// Get user from localStorage
let users;
const loadState = ()=>{
    try {
        const serializedState = localStorage.getItem("user");
        if (serializedState === null) {
            return undefined;
        }
        users = JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
loadState();
// Register user
const auth_register = (0,toolkit_.createAsyncThunk)("auth/register", async (user, thunkAPI)=>{
    try {
        return await plugins_authService.register(user);
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
// Login user
const auth_login = (0,toolkit_.createAsyncThunk)("auth/login", async (user, thunkAPI)=>{
    try {
        return await plugins_authService.login(user);
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
const auth_logout = (0,toolkit_.createAsyncThunk)("auth/logout", async ()=>{
    await plugins_authService.logout();
});
const authSlice = (0,toolkit_.createSlice)({
    name: "auth",
    initialState: {
        user: users ? users : null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ""
    },
    reducers: {
        reset: (state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(auth_register.pending, (state)=>{
            state.isLoading = true;
        }).addCase(auth_register.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        }).addCase(auth_register.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        }).addCase(auth_login.pending, (state)=>{
            state.isLoading = true;
        }).addCase(auth_login.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        }).addCase(auth_login.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        }).addCase(auth_logout.fulfilled, (state)=>{
            state.user = null;
        });
    }
}); // end of createSlice
const { user , isLoading , isSuccess , isError , message ,  } = (state)=>state.auth;
const { reset: auth_reset  } = authSlice.actions;
const authReducer = authSlice.reducer;


/***/ })

};
;