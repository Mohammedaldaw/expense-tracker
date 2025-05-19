# Expense Tracker

![expense-tracker](/public/photos/expense-tracker.gif)

## Overview

Expense Tracker is a full-stack web application where users can manage daily income and expenses. 
It allows user registration, third-party login (Google/Facebook), CRUD operations on financial records, 
monthly budget setting, and alerts when a user is near or exceeds their budget.


# System Flowchart
[Click here to view the flowchart](https://prnt.sc/jnWKwXjv-Apw)
---

## Features

* User registration and login (email, Facebook, Google)
* View all expenses/revenues
* View total amounts: income, expenses, balance
* Filter by category and month
* **NEW: Budget Warning Banner**
  * Shows alert when spending hits 80% or exceeds 100% of budget
  *To meet the ES6 requirement, we implemented the Budget Warning logic using a dedicated ES6 class, encapsulating all calculations and thresholds.*
* CRUD on expenses, revenues, budget, profile
* Responsive UI with Bootstrap

---

![RWD](/public/photos/expense-tracker-RWD.gif)
![Home page](/public/photos/index.png)
![Login page](/public/photos/login-new.png)
![Register page](/public/photos/register-new.png)
![Expenses page](/public/photos/expenses.png)
![Revenues page](/public/photos/revenues.png)

---

## Technologies Used

* Node.js
* Express.js
* MongoDB + Mongoose
* Handlebars.js
* Bootstrap 4
* Passport.js (Local, Facebook, Google)
* Multer (for avatar uploads)
* Moment.js
* Redis (for session storage)

---

## Team Members

* Mohammed Al-Dawood (Project Lead / Backend)
* Abdullah Al-Hemddi (UI / Frontend Integration)
* Mohammad Al-Hemddi (Testing & Documentation)

---

## Future Work

* Export financial data to Excel or PDF
* Email alerts for exceeded budget

---

## Resources

* [MongoDB Docs](https://www.mongodb.com/docs/)
* [Passport.js Docs](http://www.passportjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Moment.js](https://momentjs.com/)

---

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js v14.15.1](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [mongoDB](https://www.mongodb.com/)

## Install Expense Tracker

#### Clone the repository

```bash
git clone https://github.com/Mohammedaldaw/expense-tracker.git
cd expense-tracker
```

#### Install project dependencies

```
$ cd expense-tracker
$ npm install
```

#### Add .env file

Copy the example environment configuration:

```
cp .env.example .env
```

---
Optional
You can get your own Facebook ID and secret on [Facebook Developers](https://developers.facebook.com/).
You can get your Google Client ID and secret on [Google Cloud Console](https://console.cloud.google.com/apis/credentials).


## Use Expense Tracker

#### Import seed data

To have default users, categories, and records set up, run the following script.

```
$ npm run seed
```

#### Start the app

If you have installed [nodemon](https://www.npmjs.com/package/nodemon), run the following script.

```
$ npm run dev
```

or just run:

```
$ node app.js
```

You can use the default accounts below, register an account, or use your Facebook/Google account to login.
```
email: user1@example.com/user2@example.com
password: 12345678
```

The server will start running on http://localhost:3000/
