import axios from "axios";

const API_URL = "http://localhost:5000/api/goals/";
//Get goals
const getGoals = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

//Get goals
const createGoal = async (goalData, token) => {
  const response = await axios.post(API_URL, goalData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

//Update goals
const updateGoal = async ({ goalId, text }, token) => {
  const response = await axios.put(
    API_URL + goalId,
    { text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

//Delete goals
const deleteGoal = async (goalId, token) => {
  const response = await axios.delete(API_URL + goalId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const goalService = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};

export default goalService;
