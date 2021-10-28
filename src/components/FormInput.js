import React from "react";
import { useState } from "react";
import "./FormInput.css";
//UI components
import Button from "@material-ui/core/Button";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

function FormInput(props) {
  const [data, setData] = useState({});


  function handleChange(e) {
    setData({ ...data, [e.target.name]: parseInt(e.target.value) });
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    props.onCalculate(data);
  }

  function handleRevert(e) {
    let creditindex = "credit" + e.target.name;
    let gradeindex = "grade" + e.target.name;
    setData({ ...data, [creditindex]: 0, [gradeindex]: 0 });
    const element = document.getElementsByName(`${creditindex}`);
    const gradeel = document.getElementsByName(`${gradeindex}`);
    element.forEach((element) => (element.value = "0"));
    gradeel.forEach((element) => (element.value = "0"));
  }

  return (
    <div>
      {Array(10)
        .fill(0)
        .map((index) => {
          
          return (
            <div className="controls">
              <form className="form">
                <div className="options">
                  <select
                    className="credits"
                    name={"credit" + index}
                    onChange={handleChange}
                  >
                    <option value="0" selected hidden>
                      Credits
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <select
                    className="grades"
                    name={"grade" + index}
                    onChange={handleChange}
                  >
                    <option value="0" selected>
                      Grades
                    </option>
                    <option value="10">S</option>
                    <option value="9">A</option>
                    <option value="8">B</option>
                    <option value="7">C</option>
                    <option value="6">D</option>
                    <option value="5">E</option>
                  </select>
                  <div>
                    <Button
                      onClick={handleRevert}
                      className="button"
                      name={index}
                      style={{
                        backgroundColor: "#C4CAEF",
                        width: "fit-content",
                        textAlign: "center",
                        height: "0px",
                        paddingBottom: "28px",
                        paddingTop: "28px",
                        marginLeft: "10px",
                      }}
                    ></Button>{" "}
                    <RotateLeftIcon
                      onClick={handleRevert}
                      className="icon"
                      name={index}
                      style={{
                        pointerEvents: "none",
                        cursor: "none",
                        color: "black",
                        position: "relative",
                        right: "50px",
                        top: "10px",
                        margin: "0",
                        fontSize: "28px",
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          );
          
        })}
      <Button
        type="submit"
        className="submit"
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        style={{
          width: "485px",
          marginRight: "4px",
          backgroundColor: "#C4CAEF",
          marginTop: "10px",
          marginBottom: "30px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        CALCULATE!
      </Button>
    </div>
  );
}

export default FormInput;
