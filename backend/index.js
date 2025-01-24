const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

app.get('/', (req,res) => {
    EmployeeModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getEmployee/:id', (req,res) => {
    const id = req.params.id;
    EmployeeModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
    
})

app.put('/updateEmployee/:id',(req,res) => {
    const id = req.params.id;
    EmployeeModel.findByIdAndUpdate({_id:id},{name: req.body.name, position: req.body.position, salary: req.body.salary})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteEmployee/:id', (req,res) => {
    const id = req.params.id;
    EmployeeModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createEmployee", (req, res) => {
    EmployeeModel.create(req.body)
        .then(users => res.status(201).json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
