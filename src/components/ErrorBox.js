import React from "react";

const ErrorBox = props => {
  return (
    <p>
      <br />
      <br />
      <center>
        Whoops! It appears that the WMATA Data is unavailable: <br />
        {props.message}
      </center>
    </p>
  );
};

export default ErrorBox;
