import React from "react";
import "./CloseBtn.css";
// import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CloseBtn = () => (
  <div>
    <Button >Close</Button>
  </div>
);

export default CloseBtn;
