import React from "react";
import "./ReOpenBtn.css";
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DupBtn = props => (
  <Button variant="raised" className="ReOpenBtn-btn" {...props}>
    Re-Open
  </Button>
);

export default DupBtn;
