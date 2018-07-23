import React from "react";
import "./NewIssueBtn.css";
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const NewIssueBtn = props => (
  <Button  variant="raised" className="NewIssueBtn-btn" {...props}>
    New Issue
  </Button>
);

export default NewIssueBtn;
