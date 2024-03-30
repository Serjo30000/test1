require('dotenv').config();
const express = require("express");
const sequelize = require("./db");
const {User, Credential} = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const preRedirect = require("./middleware/preRedirect");
const path = require("path");
const bcrypt = require('bcrypt');


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin.html", preRedirect("ADMIN"));
app.use("/volunteer.html", preRedirect("VOLUNTEER"));

app.use(express.static(path.resolve(__dirname, "static")));
app.use('/api',router);
app.use(errorHandler);

app.get('/api/hello', (req,res) => {
    res.status(200).send('Hello Test');
});

const server = app.listen(PORT, () => console.log(`Server was started. Port: ${PORT}`));

module.exports = server;
//npx mocha
//curl -X GET http://localhost:3001/api/hello
