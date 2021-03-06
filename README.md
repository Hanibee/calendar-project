# Google Calendar Project

# Getting Started
Description:
My app uses the Google Calendar API to allow users to input tasks quickly and directly into their Google Calendar.

[Heroku Deployed App Link](https://hanibee-calendarproject.herokuapp.com/)

Screenshots of Application:
![Image 1](https://raw.githubusercontent.com/Hanibee/calendar-project/main/public/images/screenshot1.png)
![Image 2](https://raw.githubusercontent.com/Hanibee/calendar-project/main/public/images/screenshot2.png)
![Image 3](https://raw.githubusercontent.com/Hanibee/calendar-project/main/public/images/screenshot3.png)


# Technologies Used: 
- Heroku
- Node JS
- Express
- Google Oauth
- Nylas

[Trello Board Link](https://trello.com/b/rx0EbeGB/unit2project)

Example code: 

Google calendar implementation code using Nylas API:
Using Nylas, I listed the events through events.list which grabs all of the events for the user and passed it into the object events. The calendar is then supposed to list the events however at the moment, it's trying to grab all of the calendars for each user so I'm not able to list the events for one calendar. Then in the views folder for calendar, I embeded a frame of the user's Google Calendar and imported it via the user's Gmail account.


Troubleshooting:

Most calendar apis use require() for their examples, but I could only use import(), because application's type was set to module in server.js, so I worked around that by using Nylas instead of the official Google Calendar API.


# Next Steps

Adding events/tasks to Google Calendar and allowing users to customize their calendars and profiles more.


