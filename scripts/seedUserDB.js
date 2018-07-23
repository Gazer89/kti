const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kti"
);

const userSeed = [
  {
    role: "Admin",
    firstName: "Melissa",
    lastName: "Rice",
    userEmail: "melissa.rice@flyfrontier.com",
    passWord: "1234",
    location: "HQ"
  },
  {
    role: "User",
    firstName: "Tom",
    lastName: "Jones",
    userEmail: "Tom.Jones@flyfrontier.com",
    passWord: "1234",
    location: "HQ"
  },  
  {
    role: "Admin",
    firstName: "Trista",
    lastName: "Miller",
    userEmail: "trista.miller@flyfrontier.com",
    passWord: "1234",
    location: "HQ"
  }
];

  db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
