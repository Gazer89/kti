import React, {Component} from "react";
import "./Login.css";
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';
import API from "../../utils/API";
import { withRouter } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';
import { Col, Row } from "../../components/Grid";





class Login extends Component {
    constructor() {
        super();
            this.state = {
                username: "",
                password:""
            };
        };

      
      componentDidMount() {
        console.log("ComponentDidMount fired")    
      };
        
    submit = (event) => {
        event.preventDefault();
        API.logIn(this.state)
          .then(res => {
            console.log(res);
            sessionStorage.setItem("username", res.data.user.username)
            this.props.history.push('/admin');
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
        <Row>
            <Col size="md-3 sm-12"></Col>
            <Col size="md-6 sm-12">
            <Row>
              <h1>Login</h1>
            </Row>
                <Panel>
                    <Form onSubmit={this.submit}>
                        <div>
                            <label>Email:</label>
                            <Input onChange={this.handleInputChange} type="text" name="username"/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <Input onChange={this.handleInputChange} type="password" name="password"/>
                        </div>
                        <div>
                            <Button type="submit" color="primary" value="Log In">LogIn</Button>
                        </div>
                    </Form>
                </Panel>
                </Col>
            <Col size="md-3 sm-12"></Col>
        </Row>
    )}
}

export default withRouter(Login);
