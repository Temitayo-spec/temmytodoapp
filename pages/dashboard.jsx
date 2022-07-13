import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../comps/Header";
import Spinner from "../comps/Spinner";
import { getUser, reset } from "../store/auth";

const dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isError = useSelector((state) => state.auth.isError);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const message = useSelector((state) => state.auth.message);
  const router = useRouter();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      router.push("/login");
    }
    dispatch(getUser());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Header />
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals dashboard</p>
      </section>
    </div>
  );
};

export default dashboard;
