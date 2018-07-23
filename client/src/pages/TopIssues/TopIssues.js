import React, { Component } from "react";
import PlusOneBtn from "../../components/PlusOneBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class TopIssues extends Component {
  state = {
      issues: [],
      category: "",
      status: "",
      description: "",
      workaround: "",
      issueCount: ""
    };
  
  componentDidMount() {
    console.log("ComponentDidMount fired")
    this.loadIssues();
  }

  loadIssues = () => {
    console.log("loadissues fired")
    API.getIssues()
      .then(res => {
        console.log(res);
        this.setState({ issues: res.data});
      })
      
      .catch(err => console.log(err));
  };

  plusOneIssue = (id) => { 
    const issue = this.state.issues.find(issue => issue._id === id);
    const payload = issue;
    const newCount = Number(payload.issueCount +1);
    const updatedPayload = {...payload, issueCount: newCount}
    API.plusOneIssue(id, updatedPayload
    ).then(res => {
          console.log("res", res);
          this.loadIssues();
        })
      .catch(err => console.log(err));
};

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-1 sm-12"></Col>
          <Col size="md-10 sm-12">
          <Row>
            <h1>All Issues</h1>
          </Row>
            {this.state.issues.length ? (
              <List>
                {this.state.issues.map(issue => (
                  <ListItem key={issue._id}>
                    <div>{issue.category} | Count: {issue.issueCount} <PlusOneBtn onClick={() => this.plusOneIssue(issue._id)}/></div>
                          <div>Description: {issue.description} </div>
                          <div>Workaround: {issue.workaround} </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-1 sm-12"></Col>
        </Row>
      </Container>
    );
  }
}

export default TopIssues;
