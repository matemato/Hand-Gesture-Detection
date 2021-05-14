const express = require('express');
const app = express();
const port = 3000;
const  { spawn } = require('child_process');

app.use(express.static('build'))

app.get('/press', (req, res) =>{
    console.log("header:", req.headers.method)
    const childPyhton = spawn('python', ['mediaController.py', req.headers.method, req.headers.action]);
    
    res.send('ok')
  })

app.listen(port, () => console.log(`listening on port ${port}`))

