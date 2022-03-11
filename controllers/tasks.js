import {Task} from '../models/task.js'

function index(req, res) {
    Task.find({})
    .then(tasks => {
        res.render('tasks/index', {
            tasks,
            title: 'Tasks', 
            user: req.user ? req.user : null
        })
    })
    .catch(err => console.error(err))
}

function newTask(req, res) {
    res.render('tasks/new',
    {
        title: 'Tasks', 
        user: req.user ? req.user : null
    })
}


function create(req, res){
    Task.create(req.body)
    .then(res.redirect('/tasks/'))
    .catch(err => console.error(err))
}

function show(req, res) {
    Task.findById(req.params.id)
    .then(task => {
        res.render('tasks/show', 
        {
            task,
            title: 'Tasks', 
            user: req.user ? req.user : null
        })})
    .catch(err => console.error(err))
}


function deleteTask(req, res) {
    Task.findByIdAndDelete(req.params.id)
    .then(res.redirect('/tasks'))
    .catch(err => console.error(err))
}


export {
    index,
    newTask as new,
    create,
    show,
    deleteTask as delete,
}


