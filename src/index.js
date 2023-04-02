const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3030
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const UserRoute  = require("./routes");
app.use("/", UserRoute);

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   