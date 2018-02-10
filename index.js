const express = require('express');
const app = express();

app.get('/todos', (req, res) => 
    res.send(JSON.stringify(['Thing One', 'Thing Two', 'Thing Three']  )))

app.listen(3000, () => console.log('Port 3000 is live!') )