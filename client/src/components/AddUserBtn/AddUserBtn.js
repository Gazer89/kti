import React from "react";
import "./AddUserBtn.css";
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AddUserBtn = props => (
  <Button  variant="raised" className="AddUserBtn-btn" {...props}>
    Add User
  </Button>
);

export default AddUserBtn;
