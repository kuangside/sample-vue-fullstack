const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req,res,next)=>{
    res.json({
        message:"Hello World"
    });
});

const port = process.env.PORT || 3000; 
app.listen(port, ()=>{
    console.log(` Server Start Port ${ port } `);
});