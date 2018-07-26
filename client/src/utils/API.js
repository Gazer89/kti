import axios from "axios";

// function determineEnv() {
//   switch(window.location.host) {
//     case 'localhost:3000': return 'http://localhost:3001'
//     case '<YOUR STAGING SERVER HERE>': return '<YOUR STAGING SERVER HOSTNAME HERE>'
//     case '<YOUR PRODUCTION URL HERE (HEROKU...?)>': return '<PROCESS.ENV.HOST>'
//     default: throw new Error('Your current environment hasn\'t been configured in API.js');
//   }
// }

export default {
  // Gets all issues
  getIssues: function() {
    console.log('GET ISSUES FIRED');    
    return axios.get("/api/issues");
    
  },
  getIssueEdit: function(id) {
    console.log('GET ISSUES FIRED');    
    return axios.get("/api/issues/" + id);
    
  },
  getWebsiteIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=Website&status=Active");
  },
  geRNTIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=RNT&status=Active");
  },
  getNettracerIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=NetTracer&status=Active");
  },
  getIROPIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=IROP&status=Active");
  },
  getBagFormIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=BagForm&status=Active");
  },
  getFlyAppIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=FlyApp&status=Active");
  },
  getRNTIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?category=RNT&status=Active");
  },
  getActiveIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?status=Active");
  },
  getClosedIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?status=Closed");
  },
  getOpenIssues: function() {
    console.log('GET ISSUES FIRED');  
    return axios.get("/api/issues?status=Open");
  },
  // Deletes the issue with the given id
  deleteIssue: function(id) {
    return axios.delete("/api/issues/" + id);
  },
  saveIssue: function(issue) {
    console.log(issue)
    return axios.post("/api/issues",issue);
  },
  updateIssue: function(id, payload){
    return axios.put("/api/issues/" + id, payload);
  },
  plusOneIssue: function(id, issue) {
    return axios.put("/api/issues/" + id, issue);
  },
  closeOneIssue: function(id, issue) {
    return axios.put("/api/issues/" + id, issue);
  },
  closeOneActiveIssue: function(id, issue) {
    return axios.put("/api/issues/" + id, issue);
  },
  postOneIssue: function(id, issue) {
    return axios.put("/api/issues/" + id, issue);
  },
  dupIssue: function(id, issue) {
    return axios.put("/api/issues/" + id, issue);
  },
  logIn: function( auth) {
    return axios.post("/api/users/login", auth);
  },
  addUser: function( payload) {
    console.log("pay load at api js", payload)
    return axios.post("/api/adduser", payload);
  },
  // Saves a example to the database
  saveExample: function(exampleData) {
  return axios.post("/api/examples", exampleData);
  }
};
