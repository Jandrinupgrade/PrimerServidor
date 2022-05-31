
const express = require('express');
const PORT = 3000;
const app = express();
const db = require ('./db');
db.connect();

const indexRouter = require('./routes/indexRouter');

app.use("/", indexRouter);


app.listen(PORT, () => {
    console.log('server ok');;
});