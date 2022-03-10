import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
const router = Router()

/* GET users listing. */
// When the router receives a get request to / , run the index function from controllers.
router.get('/', tasksCtrl.index)
// When the router receives a post request from / , it means that the create form has been sent, so run the create function from controllers.
router.post('/', tasksCtrl.create)
// When the router receives a get request to /new, it will go to the new page (i.e. run the newIceCream function from controllers, because this is defined as a function called new at the bottom of the page.)
router.get('/new', tasksCtrl.new)
// When the router receives a get request to go to a parameter called :id (which will be the id of the particular ice cream entry in the database), run the show function to send it to the correct ice cream page, based on that id parameter
router.get('/:id', tasksCtrl.show)
// "DELETE" method is not supported by HTML forms, so have to use router.post instead.
// When the router receives a post request from one of the id parameter pages, followed by /delete, that means we should run the delete function - also known as deleteIcecream - from the controllers.
router.post('/:id/delete', tasksCtrl.delete)


export {
  router
}