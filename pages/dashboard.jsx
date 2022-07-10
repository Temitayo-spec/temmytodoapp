import { useEffect } from "react";
import Link from "next/link";
import GoalForm from "../comps/GoalForm";
import Spinner from "../comps/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getGoals, reset } from "../store/goals";
import GoalItem from "../comps/GoalItem";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goal.goals);
  const isLoading = useSelector((state) => state.goal.isLoading);
  const isError = useSelector((state) => state.goal.isError);
  const isSuccess = useSelector((state) => state.goal.isSuccess);
  const message = useSelector((state) => state.goal.message);

  useEffect(() => {
    dispatch(getGoals());
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      window.location.pathname = "/login";
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals?.length > 0 ? (
          <div className="goals">
            {goals?.map((goal) => (
              <GoalItem key={goal?._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
