
import React from "react";
import CategoryOptionsDropDown from "../../components/CategoryOptionsDropDown";
import Modal from 'react-modal';
import API from "../../utils/API";
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import NewIssueBtn from "../../components/NewIssueBtn";

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




class NewIssueMod extends React.Component {
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
        category: null,
        description: "",
        issueCount: "",
        originalRnt: "",
        originalPNR: "",
        originalNetTracer: "",
        originalURL: ""
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount() {
    console.log("ComponentDidMount fired")
    Modal.setAppElement('body');
  }

  openModal() {
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


  handleFormSubmit = event => {

    event.preventDefault();
      API.saveIssue({
       
        category: this.state.category,  
        status: "Open", 
        description: this.state.description, 
        workaround: "", 
        issueCount: "1", 
        duplicate: false,
        originalRnt: this.state.originalRnt,
        originalPNR: this.state.originalPNR,
        originalNetTracer: this.state.originalNetTracer,
        originalURL: this.state.originalURL
      })
        .then(res => {
            console.log(res);
            this.closeModal();
          })
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NewIssueBtn onClick={this.openModal}></NewIssueBtn>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          // onRequestClose={this.closeModal}
          style={customStyles}>
          <Button  className="mui--pull-right" onClick={this.closeModal}>Close</Button>
          <legend>New Issue</legend>
          <p> Complete all the fields that apply to the issue. </p>
          <Form>
              <CategoryOptionsDropDown
                value={this.category}
                name="category"
                options={ this.categories }
                updateParent={ this.updateCategory }
                />
              <Input required={true}
                value={this.state.originalRnt}
                onChange={this.handleInputChange}
                name="originalRnt"
                label="RNT Number (required)"
              />
               <Input required={true}
                value={this.state.originalPNR}
                onChange={this.handleInputChange}
                name="originalPNR"
                label="PNR (required)"
              />
              
              <Input
                value={this.state.originalNetTracer}
                onChange={this.handleInputChange}
                name="originalNetTracer"
                label="Net Tracer Number"
              />
              <Input
                value={this.state.originalURL}
                onChange={this.handleInputChange}
                name="originalURL"
                label="Url of Problem Page"
              />
              <Textarea
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

export default NewIssueMod;