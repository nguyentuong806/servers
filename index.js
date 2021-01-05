let express = require('express');
const router = require('./routers');
const bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3306;

//Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

router(app);

const server = app.listen(port, (error) => {
  if (error) return console.log('Error: ${error}');
  console.log('Server listening on port ' + server.address().port);
});