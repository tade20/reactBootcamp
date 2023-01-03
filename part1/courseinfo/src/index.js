import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content></Content>
      <Total
        excercises1={exercises1}
        excercises2={exercises2}
        excercises3={exercises3}
      ></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
