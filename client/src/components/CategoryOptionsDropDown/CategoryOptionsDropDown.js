import React from 'react';
// import ReactDOM from 'react-dom';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { PropTypes } from 'prop-types';
// import "./CategoryOptionsDropDown.css";

const CategoryOptionsDropDown = (props) => (

      <Select defaultValue={props.value} color="primary" label="Select the Category of the Issue" onChange={(e) => props.updateParent(e.target.value) }>
          <Option>Select Category</Option>
        { props.options.map((category, index) => (
          <Option key={ index } value={ category } label={ category } />
        ))}
      </Select>

  );


CategoryOptionsDropDown.propTypes = {
  updateParent: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default CategoryOptionsDropDown;
