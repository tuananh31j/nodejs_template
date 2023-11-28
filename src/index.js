const db = require('./config/db')
const express = require('express');
const routerApi = require('./routes')
require('dotenv').config()
const PORT = process.env.PORT;
const app = express();

//connect database
db.connect();


app.use(express.json());

/**http://localhost:3000/api/customer/:id */
app.use('/api', routerApi);


// la mot middlewares de nhan du lieu tu body
app.use(express.urlencoded({
    extended: true
}))

// chay server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));