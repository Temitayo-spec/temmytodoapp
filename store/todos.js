import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "../plugins/todoService";

// Create new Todo
export const createTodo = createAsyncThunk(
  "todos/create",
  async (todoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.createTodo(todoData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All Todos
export const getTodos = createAsyncThunk(
  "todos/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.getTodos(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a todo
export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.deleteTodo(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update a todo
export const updateTodos = createAsyncThunk(
  "todos/update",
  async ({ todoId, formData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.updateTodo({ todoId, formData }, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Completed Todos
export const getCompletedTodos = createAsyncThunk(
  "todos/getCompleted",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.getCompletedTodos(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Set Todos to completed
export const setTodoToCompleted = createAsyncThunk(
  "todos/setCompleted",
  async (todoId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.setTodoToCompleted(todoId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    id: "",
    todoDetails: [],
  },
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setTodoDetails: (state, action) => {
      state.todoDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = [...state.todos, action.payload.data];
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload.data;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload._id
        );
        console.log(state.todos, action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = state.todos.map((todo) => {
          if (todo._id === action.payload.data._id) {
            return action.payload.data;
          }
          return todo;
        });
      })
      .addCase(updateTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCompletedTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompletedTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(getCompletedTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(setTodoToCompleted.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setTodoToCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Replacing todo with new todo
        state.todos = state.todos.map((todo) => {
          if (todo._id === action.payload.data._id) {
            return action.payload.data;
          }
          return todo;
        });
        state.todoDetails = action.payload.data;
      })
      .addCase(setTodoToCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setId, setTodoDetails } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
