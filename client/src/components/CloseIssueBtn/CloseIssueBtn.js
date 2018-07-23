import React from "react";
import "./CloseIssueBtn.css";
import Button from 'muicss/lib/react/button';
 

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CloseIssueBtn = props => (
  <Button variant="raised" color="danger" className="CloseIssueBtn-btn" {...props}>
    Close
  </Button>
);

export default CloseIssueBtn;
