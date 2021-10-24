import React, { useState } from "react";

//style
import "./CalculateGpa.css";

//components

import FormInput from "./FormInput";
import DisplayResult from "./UI/DisplayResult";

function CalculateGpa(props) {
  const [gpa, setGpa] = useState("");
  const [error, setError] = useState("");
  function calculateGpa(data) {
    let mul = 0;
    let sum = 0;
    Object.keys(data).map(function (key, index) {
      let creditindex = "credit" + index;
      let gradeindex = "grade" + index;
      if (
        typeof data[creditindex] === "undefined" ||
        typeof data[gradeindex] === "undefined"
      ) {
        data[gradeindex] = 0;
        data[creditindex] = 0;
      }
      mul = mul + data[creditindex] * data[gradeindex];
      sum = sum + data[creditindex];
    });

    const gpa = mul / sum;

    setGpa(gpa.toFixed(2));
    setError(mul / sum);
  }

  function errorHandler() {
    console.log("hello");
    setError(null);
  }

  return (
    <div>
      {error ? (
        <DisplayResult
          title={
            gpa > 8 ? (
              <div>
                "<i>Doing great keep up the good work</i> 😉"
              </div>
            ) : (
              <i>
                "Believe in yourself and all that you are. Know that there is
                something inside you that is greater than any obstacle."
              </i>
            )
          }
          message={`Your gpa is ${gpa} 😇 `}
          gpa={gpa}
          onConfirm={errorHandler}
        />
      ) : (
        ""
      )}
      <div className="gpa">
        <div className="container">
          <h1>CALCULATE GPA</h1>
          <FormInput onCalculate={calculateGpa} />
        </div>
      </div>
    </div>
  );
}

export default CalculateGpa;
