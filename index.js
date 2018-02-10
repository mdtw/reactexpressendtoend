const express = require('express');
const app = express();

let toDoList = ['Thing One', 'Thing Two', 'Thing Three']

app.get('/todos', (req, res) => 
    res.send(JSON.stringify(toDoList)))

app.post('/addToDo', (req, res) => {
    toDoList.push("Thing Four") //no need to parse anything here = we are not specifying the req 
    // specifically for a body that isn't a string etc. Therefore just push the actual string to the array.
    res.send() 
})

app.listen(3000, () => console.log('Port 3000 is live!') )