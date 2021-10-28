import React, { useState } from "react";

//style
import "./CalculateGpa.css";

//components

import FormInputCgpa from "./FormInputCgpa";
import DisplayResult from "./UI/DisplayResult";

function CalculateCgpa(props) {
  const [cgpa, setCgpa] = useState("");
  const [error, setError] = useState("");
  function calculateCgpa(
    currentGpa,
    currentCredits,
    creditsBefore,
    cgpaBefore
  ) {
    if (
      currentGpa === "" ||
      currentCredits === "" ||
      creditsBefore === "" ||
      cgpaBefore === ""
    ) {
      currentGpa = 0;
      currentCredits = 0;
      creditsBefore = 0;
      cgpaBefore = 0;
    } else {
      const result =
        (currentGpa * currentCredits + cgpaBefore * creditsBefore) /
        (currentCredits + creditsBefore);

      setCgpa(result.toFixed(2));

      setError(cgpa);
    }
  }
  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error ? (
        <DisplayResult
          title={
            cgpa > 8 ? (
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
          message={`Your cgpa is ${cgpa} 😇 `}
          gpa={cgpa}
          onConfirm={errorHandler}
        />
      ) : (
        ""
      )}
      <div className="gpa">
        <div className="container">
          <h1>CALCULATE CGPA</h1>
          <FormInputCgpa onCalculate={calculateCgpa} />
        </div>
      </div>
    </div>
  );
}

export default CalculateCgpa;
