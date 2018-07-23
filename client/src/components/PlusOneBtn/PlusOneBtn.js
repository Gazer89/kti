import React from "react";
import "./PlusOneBtn.css";
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const PlusOneBtn = props => (
  <Button  variant="fab" color="danger" className="plusOne-btn" {...props}>
    +1
  </Button>
);

export default PlusOneBtn;
