// Require packages
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const methodOverride = require('method-override')

// Load .env in dev
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Config & helpers
const routes = require('./routes')
const usePassport = require('./config/passport')
require('./config/mongoose')
require('./utils/handlebars-helper')

const PORT = process.env.PORT || 3000
const app = express()

// Set up Handlebars
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  })
)
app.set('view engine', 'hbs')

// Session (in-memory store)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: true,
      secure: false,
      httpOnly: false
    }
  })
)

// Body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Method override for PUT/DELETE
app.use(methodOverride('_method'))

// Static files
app.use(express.static('public'))

// Passport initialize
usePassport(app)

// Flash messages
app.use(flash())

// Make auth & flash vars available in all views
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  res.locals.error_msg = req.flash('error_msg')
  next()
})

// Routes
app.use(routes)

// Start server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
