import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const color = useSelector((state) => state.theme.color);
  return (
    <div style={{ backgroundColor: color }}>
      <h1>About</h1>
      <p>This is about section of this website</p>
      <p>wanna go back to homepage ? click below to go back</p>
      <button>go back</button>
    </div>
  );
};

export default About;
