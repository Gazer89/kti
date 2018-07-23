// import React, { Component } from 'react';
// import Container from "../Grid/Container";
// import API from "../../utils/API";

// class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
  
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         console.log('handleSubmit')
//         console.log(this.state);

//             API.login({
//                 username: this.state.username,
//                 password: this.state.password
//             })
//             .then(response => {
//                 console.log('login response: ')
//                 console.log(response)
//                 if (response.status === 200) {
//                     this.setState({
//                         redirectTo: '/review'
//                     })
//                 }
//             }).catch(error => {
//                 console.log('login error: ')
//                 console.log(error);
                
//             })
//     }

//     render() {
//         return (
//             <Container>
//                 <Form>
//                     <div>
//                         <label>Username:</label>
//                         <Input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                     </div>
//                     <div>
//                         <Button type="submit" value="Log In" onClick={this.handleSubmit} type="submit"/>
//                     </div>
//                 </Form>         
//             </Container>
//         )
//     }
// }
// export default Login;