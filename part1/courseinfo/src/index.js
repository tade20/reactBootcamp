import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content part={part1} number={exercises1}></Content>
      <Content part={part2} number={exercises2}></Content>
      <Content part={part3} number={exercises3}></Content>
      <Total
        excercises1={exercises1}
        excercises2={exercises2}
        excercises3={exercises3}
      ></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));