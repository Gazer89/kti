import React from "react";
import "./DupBtn.css";
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DupBtn = props => (
  <Button variant="raised" className="DupBtn-btn" {...props}>
    Duplicate
  </Button>
);

export default DupBtn;
