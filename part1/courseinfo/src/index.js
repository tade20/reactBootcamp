import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content></Content>
      <Total
        excercises1={part1.exercises}
        excercises2={part2.exercises}
        excercises3={part3.exercises}
      ></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
