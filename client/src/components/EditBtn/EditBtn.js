import React from "react";
import "./EditBtn.css";
import Button from 'muicss/lib/react/button';
 

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EditBtn = props => (
  <Button variant="raised" className="EditBtn-btn" {...props}>
    Edit
  </Button>
);

export default EditBtn;
