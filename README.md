# Spotholes

## Project 4 - SEI - General Assembly

A full-stack app with REACT.js frontend and express backend, where users can view and navigate directions with markers indicating pothole locations reported by app users. 

## Demonstration

<a href="https://spotholes.herokuapp.com/">Link to website</a>

<p><img src="/demo/" width='500px' style="text-align:center;"></p>

## plan / approach

The planning process involved the following steps:

### 1- Wireframing

The Spotholes app is a SPA(single page application) but presents three different pages to users, the about page shows some statistics and how to use the app, sign-up & log-in page, and the map page where users can navigate and report potholes.

### 2- Database diagram

The database schema consists of 2 tables.The schema was thoroughly planned to make the development process as smooth as possible. The Database diagram shows the relationship between all entities in the database.

<p><img src="/images/ERD.png" width='500px' style="text-align:center;"></p>

### 3- Backend Development

The backend development invovled the following steps:

<ol>
    <li>Database creation and population using schema </li>
    <li>User sign up and sign in</li>
    <li>POST and GET data from database for users and potholes tables</li>
</ol>

### 4- Frontend Development

The front end development involved the following steps:

<ul>
    <li>Use of React.js and its functional components with hook and state management</li>
    <li>Use of react-map-gl to export components and make API requests</li>
    <li>CSS</li>
</ul>

## Technologies used

<ul>
    <li>React.js</li>
    <li>express</li>
    <li>Axios</li>
    <li>Postgresql</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>GitHub</li>
    <li>Heroku</li>
</ul>

## Lessons Learnt

<ul>
    <li>React and use of its third-party libraries</li>
    <li>express practice</li>
    <li>SPA app best practices</li>
    <li>Axios with API</li>
</ul>

## Future Features

<ul>
    <li>Locations of speed bumps, major road events to be implemented</li>   
</ul>