// Load the MySQL pool connection
const pool = require('./config');
const { response } = require("express");

const router = (app) => {
  
  app.get("/users", (request, response) => {
    console.log("URL: ", request.url);
    pool.query("SELECT * FROM singer", (error, result) => {
      console.log("RESPONSE1: ", result + "/");
      response.send(result);
    });
  });
};

// Export the router
module.exports = router;
