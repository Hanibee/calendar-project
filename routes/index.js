import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  console.log("the user is "+req.user)
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})
//change /tasks to /index (or something else) later so that the homepage has two images w/ two buttons that link to either view your Google Calendar or add a task

export {
  router
}
