const express = require('express')

// middlewares
const sessions = require("./middlewares/sessions");

// controllers
const potholesController = require('./controllers/potholes_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')



const app = express()
const port = process.env.PORT || 3001


app.listen(port, () => console.log(`Server is listening on port: ${port}`))

// middlware to read JSON body data
app.use(express.json())

app.use(sessions);




app.use('/users', usersController)
app.use('/potholes', potholesController)
app.use('/sessions', sessionsController)

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}