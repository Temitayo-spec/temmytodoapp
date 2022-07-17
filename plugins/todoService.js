import axios from "axios";

const API_URL = "https://temmytodoapp.herokuapp.com/api/todos/";
//Get goals
const getTodos = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Get completed Todos
const getCompletedTodos = async (token) => {
  const response = await axios.get(API_URL + 'completed', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Set Todo to completed
const setTodoToCompleted = async (todoId, token) => {
  const response = await axios.put(
    API_URL + "completed/" + todoId,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


//Get goals
const createTodo = async (todoData, token) => {
  const response = await axios.post(API_URL, todoData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

//Update goals
const updateTodo = async ({ todoId, formData }, token) => {
  const response = await axios.put(
    API_URL + todoId,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

//Delete goals
const deleteTodo = async (todoId, token) => {
  console.log(todoId);
  const response = await axios.delete(API_URL + todoId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const todoService = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getCompletedTodos,
  setTodoToCompleted,
};

export default todoService;
