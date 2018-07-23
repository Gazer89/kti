import React from "react";
import "./PostBtn.css";
import Button from 'muicss/lib/react/button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const PostBtn = props => (
  <Button  variant="raised" color="primary" className="PostBtn-btn" {...props}>
    Post
  </Button>
);

export default PostBtn;
