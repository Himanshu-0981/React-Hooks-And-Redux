import React from "react";
import Counter from "../features/Counter/Counter";
import { useSelector } from "react-redux";

const Home = () => {
  const color = useSelector((state) => state.theme.color);
  return (
    <>
      <h1 style={{ color: color }}>Home</h1>
      <Counter />
    </>
  );
};

export default Home;
