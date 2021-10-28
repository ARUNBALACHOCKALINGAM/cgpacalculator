import React, { useState } from "react";

//style
import "./CalculateGpa.css";

//components
import FormInputRetain from "./FormInputRetain";
import DisplayResult from "./UI/DisplayResult";

function Retain(props) {
  const [retain, setRetain] = useState("");
  const [error, setError] = useState("");
  
  
  function retainCgpa(retainCgpa, currentCredits, creditsBefore, currentCgpa){
    if (
        retainCgpa === "" ||
        currentCredits === "" ||
        creditsBefore === "" ||
        currentCgpa === ""
      ) {
        currentCgpa = 0;
        currentCredits = 0;
        creditsBefore = 0;
        currentCgpa = 0;
      } else {
        const result=((retainCgpa*(currentCredits+creditsBefore))-(currentCgpa*creditsBefore))/(currentCredits)
        setRetain(result.toFixed(2));
        setError(retain);
    }
  
    

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
            retain > 10 ? (
              <div>
                "<i>Not possible bitch</i> 😉"
              </div>
            ) : (
                <div>

               "<i>You got this</i> 😉"

                </div>
            )
          }
          message={`CGPA needed to retain is ${retain}😇 `}
          gpa={retain}
          onConfirm={errorHandler}
        />
      ) : (
        ""
      )}
      <div className="gpa">
        <div className="container">
          <h1>WANT TO RETAIN?</h1>
          <FormInputRetain onCalculate={retainCgpa} />
        </div>
      </div>
    </div>
  );
}

export default Retain;
