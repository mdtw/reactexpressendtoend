const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.raw({type: '*/*'}))

let toDoList = ['Thing One', 'Thing Two', 'Thing Three']

app.get('/todos', (req, res) => 
    res.send(JSON.stringify(toDoList)))

app.post('/addToDo', (req, res) => {
    toDoList.push(JSON.parse(req.body.toString()))
    res.send("New item added")   
})    

app.post('/clearToDos', (req, res) => {
    toDoList = [];
    res.send("All cleared out")
})

app.listen(4000, () => console.log('Port 4000 is live!') )