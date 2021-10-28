import React from "react";
import { useState } from "react";
import "./FormInputCgpa.css";
//UI components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function FormInputCgpa(props) {
  const [currentGpa, setcurrentGpa] = useState("");
  const [currentCredits, setcurrentCredits] = useState("");
  const [creditsBefore, setcreditsBefore] = useState("");
  const [cgpaBefore, setcgpaBefore] = useState("");

  function handleClick(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    props.onCalculate(currentGpa, currentCredits, creditsBefore, cgpaBefore);
  }
  function handleReset(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    setcurrentGpa("");
    setcurrentCredits("");
    setcreditsBefore("");
    setcgpaBefore("");
  }

  function handleGpahange(e) {
    setcurrentGpa(parseFloat(e.target.value));
  }

  function handleCgpahange(e) {
    setcgpaBefore(parseFloat(e.target.value));
  }

  function handleCreditschange(e) {
    setcurrentCredits(parseFloat(e.target.value));
  }

  function handlePrevCredchange(e) {
    setcreditsBefore(parseFloat(e.target.value));
  }

  return (
    <div>
      <form>
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            backgroundColor: "#ffe920",
            WebkitAppearance: "none",
          }}
          type="number"
          value={currentGpa}
          variant="filled"
          className="currentgpa"
          name="currentgpa"
          label="Current GPA"
          onChange={handleGpahange}
        />
        <br />
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            backgroundColor: "#ffe920",
          }}
          value={currentCredits}
          type="number"
          variant="filled"
          className="currentcredits"
          name="currentcredits"
          label="Current Credits"
          onChange={handleCreditschange}
        />
        <br />
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            backgroundColor: "#ffe920",
          }}
          variant="filled"
          type="number"
          className="cgpabefore"
          name="cgpabefore"
          value={cgpaBefore}
          label="CGPA before this sem"
          onChange={handleCgpahange}
        />
        <br />
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#ffe920",
          }}
          variant="filled"
          type="number"
          className="creditsbefore"
          name="creditsbefore"
          value={creditsBefore}
          label="Credits before this sem"
          onChange={handlePrevCredchange}
        />
        <br />
        <div className="buttons">
          <Button
            type="submit"
            className="submit"
            color="primary"
            variant="contained"
            onClick={handleClick}
            style={{
              width: "250px",
              marginRight: "4px",
              backgroundColor: "#ffe920",
              marginTop: "20px",
              marginBottom: "30px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            CALCULATE!
          </Button>
          <Button
            type="submit"
            className="submit"
            color="primary"
            variant="contained"
            onClick={handleReset}
            style={{
              width: "250px",
              marginRight: "4px",
              backgroundColor: "#ffe920",
              marginTop: "20px",
              marginBottom: "30px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormInputCgpa;
