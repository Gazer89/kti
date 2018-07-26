import React, { Component } from "react";
import DupBtn from "../../components/DupBtn";
import ReOpenBtn from "../../components/ReOpenBtn";
import CloseIssueBtn from "../../components/CloseIssueBtn";
import PostBtn from "../../components/PostBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import EditIssueMod from "../../pages/EditIssueMod"
import AddUser from "../../components/AddUser";


class Admin extends Component {
  state = {
      openIssues: [],
      closedIssues:[],
      activeIssues: []

    };
  
  componentDidMount() {
    console.log("ComponentDidMount fired")
    this.loadIssues();
  }

  loadIssues = ( ) => {
    this.loadOpenIssues();
    this.loadActiveIssues();
    this.loadClosedIssues();
  }


  loadOpenIssues = () => {
    API.getOpenIssues()
      .then(res => {
        this.setState({ openIssues: res.data});
      })
      .catch(err => console.log(err));
  };

  loadClosedIssues = () => {
    API.getClosedIssues()
      .then(res => {
        this.setState({ closedIssues: res.data});
      })
      .catch(err => console.log(err));
  };

  loadActiveIssues = () => {
    API.getActiveIssues()
      .then(res => {
        this.setState({ activeIssues: res.data});
      })
      .catch(err => console.log(err));
  };

  plusOneIssue = (id) => { 
    console.log(id)
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

  // closeOneIssue = (id) => { 
  //   console.log("closeone"+ id)
  //   const issue = this.state.openIssues.find(issue => issue._id === id);
  //   console.log(issue.status)
  //   API.closeOneIssue(id, "Closed")
  //   .then(res => {
  //     console.log(res);
  //     this.loadIssues();
  //   })
  //   .catch(err => console.log(err));
  // };

  closeOneIssue = (id) => { 
    const issue = this.state.openIssues.find(issue => issue._id === id);
    const payload = issue;
    const newStatus = payload.status = "Closed";
    const updatedPayload = {...payload, status: newStatus}
    API.closeOneIssue(id, updatedPayload
    ).then(res => {
          console.log("res", res);
          this.loadIssues();
        })
      .catch(err => console.log(err));
  };

  closeOneActiveIssue = (id) => { 
    const issue = this.state.activeIssues.find(issue => issue._id === id);
    const payload = issue;
    const newStatus = payload.status = "Closed";
    const updatedPayload = {...payload, status: newStatus}
    API.closeOneIssue(id, updatedPayload
    ).then(res => {
          console.log("res", res);
          this.loadIssues();
        })
      .catch(err => console.log(err));
  };

  postOneIssue = (id) => { 
    const issue = this.state.openIssues.find(issue => issue._id === id);
    const payload = issue;
    const newStatus = payload.status = "Active";
    const updatedPayload = {...payload, status: newStatus}
    API.postOneIssue(id, updatedPayload
    ).then(res => {
          console.log("res", res);
          this.loadIssues();
        })
      .catch(err => console.log(err));
  };

  reOpenOneIssue = id => { 
    const issue = this.state.closedIssues.find(issue => issue._id === id);
    const payload = issue;
    const newStatus = payload.status = "Active";
    const updatedPayload = {...payload, status: newStatus}
    API.postOneIssue(id, updatedPayload
    ).then(res => {
          console.log("res", res);
          this.loadIssues();
        })
      .catch(err => console.log(err));
  };

  dupIssue = id => { 
    const issue = this.state.openIssues.find(issue => issue._id === id);
    const payload = issue;
    const newStatus = payload.duplicate =true;
    const updatedPayload = {...payload, duplicate: newStatus}
    API.dupIssue(id, updatedPayload
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
                <Col size="md-10 sm-12">
                <h1>Admin Page</h1>
                </Col>
              <Col size="md-2 sm-12">
                <AddUser/>
              </Col>
            </Row>
          <h3> Open Issues </h3>
            {this.state.openIssues.length ? (
              <List>
                {this.state.openIssues.map(issue => (
                  <ListItem key={issue._id}>
                    <div>{issue.category} | Count: {issue.issueCount} </div>
                          <div>Description: {issue.description} </div>
                          <div>Workaround: {issue.workaround} </div>
                      <div>
                        <EditIssueMod  loadIssues={this.loadIssues} id={issue._id}/>  
                        <DupBtn onClick={() => this.dupIssue(issue._id)}></DupBtn>
                        <CloseIssueBtn onClick={() => this.closeOneIssue(issue._id)}></CloseIssueBtn>
                        <PostBtn onClick={() => this.reOpenOneIssue(issue._id)}></PostBtn>
                      </div>
                  </ListItem>
                ))}
              </List>
            ) 
            : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-1 sm-12"></Col>
        </Row>
        <Row>
        <Col size="md-1 sm-12"></Col>
          <Col size="md-10 sm-12">
          <h3> Active Issues </h3>
            {this.state.activeIssues.length ? (
              <List>
                {this.state.activeIssues.map(issue => (
                  <ListItem key={issue._id}>
                    
                    <div>{issue.category} | Count: {issue.issueCount} </div>
                          <div>Description: {issue.description} </div>
                          <div>Workaround: {issue.workaround} </div>
                      <div>
                        <EditIssueMod id={issue._id}/>  
                        <CloseIssueBtn onClick={() => this.closeOneActiveIssue(issue._id)}></CloseIssueBtn>
                      </div>
                  
                  </ListItem>
                ))}
              </List>
            ) 
            : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-1 sm-12"></Col>
        </Row>
        <Row>
        <Col size="md-1 sm-12"></Col>
          <Col size="md-10 sm-12">
          <h3> Closed Issues </h3>
            {this.state.closedIssues.length ? (
              <List>
                {this.state.closedIssues.map(issue => (
                  <ListItem key={issue._id}>
                   
                    <div>{issue.category} | Count: {issue.issueCount}</div>
                          <div>Description: {issue.description} </div>
                          <div>Workaround: {issue.workaround} </div>
                      <div>
                        <EditIssueMod id={issue._id}/> 
                        <ReOpenBtn onClick={() => this.reOpenOneIssue(issue._id)}></ReOpenBtn>
                      </div>
                   
                  </ListItem>
                ))}
              </List>
            ) 
            : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-1 sm-12"></Col>
        </Row>
      </Container>
    );
  }
}

export default Admin;