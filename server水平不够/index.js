const express = require('express');
const app = express();
const router = require('./router')

app.use('/api', router)
app.listen(8989, () => {
    console.log('http://127.0.0.1:8989');
})