
import React from "react";
import CategoryOptionsDropDown from "../../components/CategoryOptionsDropDown";
import Modal from 'react-modal';
import API from "../../utils/API";
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import EditBtn from "../../components/EditBtn";
import CloseBtn from "../../components/CloseBtn";
// import { Link } from "react-router-dom";
// import { TextArea, FormBtn } from "../../components/Form";

const customStyles = {
    content : {
      top: '40%',
      left: '50%',
      right: '50%',
      hight: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'

    }
  };


class EditIssueMod extends React.Component {
  constructor() {
    super();
  
    this.categories = [
      'Website',
      'FlyApp',
      'RNT',
      'IROP',
      'NetTracer',
      'BagForm'
    ];
 
    this.state = {
        modalIsOpen: false,
        id: "",  
        duplicate: "",  
        category: "",  
        status: "",  
        description: "",  
        workaround: "",  
        issueCount: "",  
        originalRnt: "",  
        originalPNR: "",  
        originalNetTracer: "",  
        originalURL: "",  
        users: "",  
        examples: "",  
        orginalSubmitdate: ""
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount() {
    // console.log("ComponentDidMount fired")
 
  }


  openModalIssue = (id) => { 
    // console.log(id)
    API.getIssueEdit(id)
    .then(res => {
      console.log(res.data);
      this.setState({
        id: res.data._id,  
        duplicate: res.data.duplicate,
        category: res.data.category,
        status: res.data.status,
        description: res.data.description,
        workaround: res.data.workaround,
        issueCount: res.data.issueCount,
        originalRnt: res.data.originalRnt,
        originalPNR: res.data.originalPNR,
        originalNetTracer: res.data.originalNetTracer,
        originalURL: res.data.originalURL,
        users: res.data.users,
        examples: res.data.examples,
        orginalSubmitdate: res.data.orginalSubmitdate,
        modalIsOpen: true});
    })
   
    .catch(err => console.log(err));
  };

  
  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  updateCategory(value) {
    this.setState({ category: value }, () => console.log(this.state));
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
      const payload = this.state;
      const updatedPayload = {...payload, status: "Active", issueCount: "1"}
      API.updateIssue(this.state.id, updatedPayload
      ).then(res => {
            console.log("res", res);
            this.closeModal();
            this.props.loadIssues();
          })
        .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
         <EditBtn onClick={() => this.openModalIssue(this.props.id)}></EditBtn>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          // onRequestClose={this.closeModal}
          style={customStyles}>
          <Button onClick={this.closeModal}>Close</Button>
          <legend>Edit Issue</legend>
          <p> Complete all the fields that apply. </p>
          <Form>
              <CategoryOptionsDropDown
                value={this.state.category}
                name="category"
                options={ this.categories }
                updateParent={ this.updateCategory }
                />
              <Input required={true}
                defaultValue={this.state.originalRnt}
                value={this.state.originalRnt}
                onChange={this.handleInputChange}
                name="originalRnt"
                label="RNT Number (required)"
              />
               <Input required={true}
                defaultValue={this.state.originalPNR}
                value={this.state.originalPNR}
                onChange={this.handleInputChange}
                name="originalPNR"
                label="PNR (required)"
              />
              
              <Input
                defaultValue={this.state.originalNetTracer}
                value={this.state.originalNetTracer}
                onChange={this.handleInputChange}
                name="originalNetTracer"
                label="Net Tracer Number"
              />
              <Input
                defaultValue={this.state.originalURL}
                value={this.state.originalURL}
                onChange={this.handleInputChange}
                name="originalURL"
                label="Url of Problem Page"
              />
              <Textarea
                defaultValue={this.state.workaround}
                value={this.state.workaround}
                onChange={this.handleInputChange}
                name="workaround"
                label="Workaround"
              />
              <Textarea
                defaultValue={this.state.description}
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                label="Description of the Issue"
              />
            </Form>
            <Button variant="raised" onClick={this.handleFormSubmit}>
                Submit
            </Button>
        </Modal>
      </div>
    );
  }
}

export default EditIssueMod;