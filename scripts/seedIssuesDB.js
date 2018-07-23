const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kti"
);

const issueSeed = [
  {
    category: "Website",
    status: "Open",
    description: "Stuff about the issue",
    orignalSubmitterEmail: "melissa.rice@flyfrontier.com",
    orignalSubmitterID: "1",
    workaround: "Stuff about how to fix the issue",
    issueCount: "3",
    duplicate: "false",
    originalRnt: "NULL",
    originalPNR: "NULL",
    originalNetTracer: "NULL",
    originalURL: "somthing.com",
    users : "NULL",
    examples : "NULL",
    orginalSubmitdate: "7/6/18"
  },
  {
    category: "Website",
    status: "Open",
    description: "Stuff about the issue",
    orignalSubmitterEmail: "melissa.rice@flyfrontier.com",
    orignalSubmitterID: "1",
    workaround: "Stuff about how to fix the issue",
    issueCount: "2",
    duplicate: "false",
    originalRnt: "NULL",
    originalPNR: "NULL",
    originalNetTracer: "NULL",
    originalURL: "somthing.com",
    users : "NULL",
    examples : "NULL",
    orginalSubmitdate: "7/6/18"
  },  
  {
    category: "Website",
    status: "Open",
    description: "Stuff about the issue",
    orignalSubmitterEmail: "melissa.rice@flyfrontier.com",
    orignalSubmitterID: "1",
    workaround: "Stuff about how to fix the issue",
    issueCount: "5",
    duplicate: "false",
    originalRnt: "NULL",
    originalPNR: "NULL",
    originalNetTracer: "NULL",
    originalURL: "somthing.com",
    users : "NULL",
    examples : "NULL",
    orginalSubmitdate: "7/6/18"
  }
  ,  
  {
    category: "RNT",
    status: "Open",
    description: "Stuff about the issue",
    orignalSubmitterEmail: "melissa.rice@flyfrontier.com",
    orignalSubmitterID: "1",
    workaround: "Stuff about how to fix the issue",
    issueCount: "2",
    duplicate: "false",
    originalRnt: "NULL",
    originalPNR: "NULL",
    originalNetTracer: "NULL",
    originalURL: "somthing.com",
    users : "NULL",
    examples : "NULL",
    orginalSubmitdate: "7/6/18"
  }
];

  db.Issue
  .remove({})
  .then(() => db.Issue.collection.insertMany(issueSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
