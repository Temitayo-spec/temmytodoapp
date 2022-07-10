"use strict";
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 8237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HZ": () => (/* binding */ goals_createGoal),
  "s6": () => (/* binding */ goals_deleteGoal),
  "M6": () => (/* binding */ goals_getGoals),
  "yP": () => (/* binding */ goalReducer),
  "mc": () => (/* binding */ goals_reset),
  "qh": () => (/* binding */ setId),
  "$G": () => (/* binding */ updateGoals)
});

// UNUSED EXPORTS: goalSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./plugins/goalService.js

const API_URL = "http://localhost:5000/api/goals/";
//Get goals
const getGoals = async (token)=>{
    const response = await external_axios_default().get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
//Get goals
const createGoal = async (goalData, token)=>{
    const response = await external_axios_default().post(API_URL, goalData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
//Update goals
const updateGoal = async ({ goalId , text  }, token)=>{
    const response = await external_axios_default().put(API_URL + goalId, {
        text
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
//Delete goals
const deleteGoal = async (goalId, token)=>{
    const response = await external_axios_default()["delete"](API_URL + goalId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
const goalService = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};
/* harmony default export */ const plugins_goalService = (goalService);

;// CONCATENATED MODULE: ./store/goals.js


const initialState = {
    goals: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
};
// Create new goal
const goals_createGoal = (0,toolkit_.createAsyncThunk)("goals/create", async (goalData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await plugins_goalService.createGoal(goalData, token);
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
const goals_getGoals = (0,toolkit_.createAsyncThunk)("goals/getAll", async (_, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await plugins_goalService.getGoals(token);
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
const goals_deleteGoal = (0,toolkit_.createAsyncThunk)("goals/delete", async (id, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await plugins_goalService.deleteGoal(id, token);
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
const updateGoals = (0,toolkit_.createAsyncThunk)("goals/update", async ({ goalId , text  }, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await plugins_goalService.updateGoal({
            goalId,
            text
        }, token);
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
const goalSlice = (0,toolkit_.createSlice)({
    name: "goal",
    initialState: {
        goals: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
        id: ""
    },
    reducers: {
        reset: (state)=>{
            initialState;
        },
        setId: (state, action)=>{
            state.id = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(goals_createGoal.pending, (state)=>{
            state.isLoading = true;
        }).addCase(goals_createGoal.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.goals.push(action.payload);
        }).addCase(goals_createGoal.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(goals_getGoals.pending, (state)=>{
            state.isLoading = true;
        }).addCase(goals_getGoals.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = action.payload;
        }).addCase(goals_getGoals.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(goals_deleteGoal.pending, (state)=>{
            state.isLoading = true;
        }).addCase(goals_deleteGoal.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = state.goals.filter((goal)=>goal._id !== action.payload.id);
        }).addCase(goals_deleteGoal.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(updateGoals.pending, (state)=>{
            state.isLoading = true;
        }).addCase(updateGoals.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = action.payload;
        }).addCase(updateGoals.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});
const { reset: goals_reset , setId  } = goalSlice.actions;
const goalReducer = goalSlice.reducer;


/***/ })

};
;