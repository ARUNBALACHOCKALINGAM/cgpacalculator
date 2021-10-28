import React from "react";

import Button from "@material-ui/core/Button";

import classes from "./DisplayResult.module.css";

function DisplayResult(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <div className={classes.cotainer}>
        <div className={classes.header}>
          <h2>{props.message}</h2>
        </div>
        <div className={classes.content}>
          <p>{props.title}</p>
        </div>
        <div className={classes.footer}>
          <Button
            onClick={props.onConfirm}
            type="submit"
            className="submit"
            color="primary"
            variant="contained"
            style={{
              width: "150px",
              marginRight: "4px",
              backgroundColor: "#ffe920",
              marginTop: "10px",
              marginBottom: "30px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {props.gpa > 8 ? "Thank you" : "Yes, I will"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DisplayResult;
