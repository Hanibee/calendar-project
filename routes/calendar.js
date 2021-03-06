import { Router } from 'express'
const router = Router()
import Nylas from 'nylas'

router.get('/', function (req, res) {
    var nylas = Nylas.with(process.env.ACCESS_TOKEN);
    nylas.events.list().then(
        events => 
        {
            res.render('calendar/index',{
                //passing title, user, and events to the calendar
                title: 'Calendar', 
                user: req.user ? req.user : null,
                events
            })
        });
})

export{
    router
}
