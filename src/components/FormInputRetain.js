import React from "react";
import { useState } from "react";
import "./FormInputCgpa.css";
//UI components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function FormInputRetain(props) {
  const [retainCgpa, setretainCgpa] = useState("");
  const [currentCgpa, setcurrentCgpa] = useState("");
  const [creditsBefore, setcreditsBefore] = useState("");
  const [currentCredits, setcurrentCredits] = useState("");

  function handleClick(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    props.onCalculate(retainCgpa, currentCredits, creditsBefore, currentCgpa);
  }
  function handleReset(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    setretainCgpa("");
    setcurrentCredits("");
    setcreditsBefore("");
    setcurrentCgpa("");
  }

  function handleretainChange(e) {
    setretainCgpa(parseFloat(e.target.value));
  }

  function handleCgpahange(e) {
    setcurrentCgpa(parseFloat(e.target.value));
  }

  function handleCreditschange(e) {
    setcurrentCredits(parseFloat(e.target.value));
  }

  function handleCurCredchange(e) {
    setcreditsBefore(parseFloat(e.target.value));
  }

  return (
    <div>
      <form>
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            backgroundColor: "#C4CAEF",
            WebkitAppearance: "none",
          }}
          type="number"
          value={retainCgpa}
          variant="filled"
          className="retaingpa"
          name="retaingpa"
          label="CGPA TO RETAIN\ATTAIN"
          max="9"
          onChange={handleretainChange}
        />
        <br />
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            backgroundColor: "#C4CAEF",
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
            backgroundColor: "#C4CAEF",
          }}
          variant="filled"
          type="number"
          className="currentCgpa"
          name="currentCgpa"
          value={currentCgpa}
          label="Current Cgpa"
          onChange={handleCgpahange}
        />
        <br />
        <TextField
          style={{
            width: "510px",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#C4CAEF",
          }}
          variant="filled"
          type="number"
          className="creditsbefore"
          name="creditsbefore"
          value={creditsBefore}
          label="Credits before this sem"
          onChange={handleCurCredchange}
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
              backgroundColor: "#C4CAEF",
              marginTop: "20px",
              marginBottom: "30px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            CHECK
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
              backgroundColor: "#C4CAEF",
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

export default FormInputRetain;
