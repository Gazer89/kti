import React, {Component} from "react";
import "./AddUser.css";
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';
import API from "../../utils/API";
import Modal from 'react-modal';
import AddUserBtn from "../AddUserBtn";

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

class AddUser extends Component {
    constructor() {
        super();
            this.state = {
                username: "",
                password:"",
                modalIsOpen: false
            };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        };

      
      componentDidMount() {
        console.log("ComponentDidMount fired")    
      };
        
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


      handleFormSubmit = (event) => {
        event.preventDefault();
        API.addUser({
            username: this.state.username,
            password: this.state.password
        })
          .then(res => {
            console.log(res);
            this.closeModal();
          })
          
          .catch(err => console.log(err));
        };

      handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
            [name]: value
            });
        };

render() {
    return (
    <div>
      <AddUserBtn onClick={this.openModal}></AddUserBtn>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            style={customStyles}>
            <Button  className="mui--pull-right" onClick={this.closeModal}>Close</Button>
            <legend>Add User</legend>
          <Form onSubmit={this.submit}>
              <div>
              <Input 
                  label="User Email: "
                  value={this.state.username}
                  onChange={this.handleInputChange} type="text"
                  name="username"/>
              </div>
              <div>
                <Input 
                  label="Password: "
                  value={this.state.password}
                  onChange={this.handleInputChange} type="password"
                  name="password"/>
              </div>
              <div>
                <Button variant="raised" onClick={this.handleFormSubmit}>
                    Submit
                </Button>
              </div>
          </Form>
      </Modal>
    </div>
    )
  }
}

export default AddUser;

