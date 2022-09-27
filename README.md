# MentorMe

<p align="center"><img src="" width="550"></p>

## Authors

<p align="left"><img src="media/AustinProf.png" width="105"> Austin Borck (Scrum Master, Developer) </p>
<p align="left"><img src="media/ChadProf2.png" width="105"> Chad Rousseau (Repo Owner, Developer) </p>
<p align="left"><img src="media/KenProf.png" width="105"> Ken Pederson (Database Administrator, Developer) </p>

## Overview

<p align="center"><img src="https://media.giphy.com/media/eVqUIgL0IVcis0RA1t/giphy.gif" width="450" height="250" /></p>

Created by developers to lift up those who endeavor to become developers.

Breaking into the developer industry can be difficult, especially when you haven't built a network. Our application, MentorMe, solves this problem. Here, bootcamp graduates register as mentors, post their review of the bootcamp they attended, the advice they have for any prospective student and the tools they recommend that will help any cohort be successful. The real impact, however, comes from the interaction between mentor and mentee. Those interested in enrolling in a software developer bootcamp register as mentees and can search for bootcamps or languages they're interested in to find mentors they can interact with. 

A mentee has access to a mentors account page where they will be able to review everything the mentor has to share about their experience. Most importantly, the mentee can interact with the mentor through posting messages and replying to the mentors responses. Furthermore, these messages can then be marked as helpful or inappropriate so admins can determine whether or not they need to delete a post. Any user also has the option of deleting a comment they have posted should they choose to do so. 

It doesn't stop there...

After graduation, new graduates can learn from their mentors on what to expect during the job search and the lessons they learned. Having a network is priceless. MentorMe... priceless. 

## Visit MentorMe!

If you would like to visit our site and take it for a test drive, see the link below. Any visitor can register a new account or utilize one of two accounts pre-built in the database...

* Mentee username: lightning, password: guest5
* Mentor username: splinter, password: mentor4  

<p align="center"><a href="http://3.21.142.131:8080/HSHTracker">PLACEHOLDER: SITE NOT YET DEPLOYED</a></>

If you would like to test the backend of the application, reference the table within the "Testing With Postman" section below for example URI's you can use to interact with the applications functionality.

## Description

<p align="center"><img src="media/mentormeschema.png" width="450"></p>



In this alpha version, the backend has been created using REST and thoroughly tested using Postman to ensure URL's invoke the desired results. THe frontend has been built with, first using vanilla Javascript to link the backend with the frontend. The second approach utilized Angular and Boorstrap. 

## Methodology

One pillar at a time.

What I enjoyed most about the backend-building stage the application is the very straight forward approach of building the backend from "the ground up". Each functionality "pillar" began with the Repository (where applicable), then the Service layer, the Service Implementation layer, next the Controller and finally using Postman to prove functionality. No other functionality was started until the current capability proved successful. This approach kept each stage of functionality development clear and distinct from the others, thereby preventing getting "lost in the sauce" and ensuring troubleshooting was straight forward.

The frontend, using  vanilla JavaScript to build the DOM, required a disciplined approach of organization. The DOM was divided into sections based on initialization and CRUD to ensure easier navigation. My desire would be to break up these functions across several JavaScript files but givent the short amount of time to develop this stage of the project, everything was kept in one place for simplicity. 

The second frontend creation, using Angular, was similarly organized but with more segregating in the Typescript file to organize the many functions into their roles such as methods for changing boolean values, methods used to change other variable assignments to objects or back to null when no longer needed. Finally, as before, using comments, the CRUD functions were divided in the order presented by the acronym. Each time a pillar of functionality was created, the site would be refreshed and tested for the desired result. At first, the desired result was for the minimum viable product. Event if the site didn't present the information the way I wanted, the only objective that mattered was the basic functionality (create, retrieve, etc.). If the application at least performed that operation, it was time to move to the next minimum viable functionality piece. Once a minimum viable product was established, the desired interaction results and appearance were tackled.

## Testing the Backend With Postman

<p align="center"><img src="media/postman.png" width="450"></p>

To test the backend of the application, a user may visit the <a href="https://www.postman.com/">Postman</a> site. Once set up, reference the table below for URI's testing the validity of the code once you've started up the program in the SpringToolSuite4 Boot Dashboard.

> For testing a non-deployed, local version of the application, each URI is preceded with "http://localhost:8083"
> Testing in a deployed environment, the prefix to the URI is "http://3.21.142.131:8080/HSHTracker"

| HTTP Verb | URI                  | Request Body | Response Body    | Functionality                                              |
|:---------:|:---------------------|:------------:|:-----------------|:--------------------------------------------------------------------------|
| GET       | '/api/edEvents'      |              |  List of events  | Return a list of all education events                                      |
| GET       | '/api/edEvents/4'    |              |  Single event    | Return an education event by Id                                            |
| GET       | '/api/edEventsSubject/Math'         |                  |  List of events  | Return a list of education events by subject                               |
| GET       | '/api/edEventsLocation/home'|       |  List of events  | Return a list of education events by location                              |
| GET       | '/api/edEventsStudent/Billy'|       |  List of events  | Return a list of education events by student name                          |
| GET       | '/api/edEventsNotes/search/on'|     |  List of events  | Return a list of education events searching by keyword in the notes field  |
| GET       | '/api/edEventsLocSubStuOrNot/search/science'|              |  List of events  | Return a list of education events searching by keyword in the location, subject, student or notes field |
| GET       | '/api/edEvtsBtwnDts/search/date/2022-09-02T01:00:00/2022-09-04T01:00:00'|              |  List of events  | Return a list of education events occurring between submitted dates        |
| POST      | '/api/newEdEvent'     | JSON         |  Created event   | Adds a new EducationEvent (see example code for a new event below)         |
| PUT       | '/api/updateEdEvent/2'| JSON         |  Updated event   | Modifies an existing EducationEvent (6 events exist in the database)       |
| DEL       | '/api/deleteEdEvent/7'|              |                  | Deletes an EducationEvent. Assumes you have created 1 new EducationEvent   |


* Example code to use for POST routes below. Note that the date and subject may be omitted due to default values being set in the service file.

> {
    "date" : "2022-09-04T12:59:11.332",
    "duration" : 15,
    "subject" : "Language Arts",
    "location" : "Home",
    "student" : "Sally",
    "notes" : "Test adding event, all fields included."
}

* Example code to use for PUT URI can utilize any variation of the code above. The example URI in the table is set to 2 but may be changed to 3 through 6 or any events added with the POST route. Please do not modify EducationEvent 1 due to all JUnit tests being written for its original data.

* Example URL to test searching for events between two dates in Postman below.

> http://3.21.142.131:8080/HSHTracker/api/edEvtsBtwnDts/search/date/2022-09-02T01:00:00/2022-09-04T01:00:00

## Lessons Learned

This project proved vital in gaining the following experience...
* How the Controllers mapping annotation directly links with what appears in the URL
* The strict syntax requirements of the methods listed in the Repository for successful SQL queries (specific references to fields of an entity and exact wording for "finding" what you're looking for)
* The inability to write in certain methods in the Repository (such as findAll, findById, adding new instances of an event, etc.). These examples all cause the application to break, leading to a quick realization of the appropriate types of methods that belong in the Repository.
* The requirement for Controllers to use wrapper classes in order to function
* The use of the @CreationTimestamp greatly simplifies the use of LocalDateTime fields
* The use of Postman for testing code and correlating the direct relationship of the URL to the methods as well as further verification of changes through writing SQL queries to the database in the zsh Terminal.
* The creation of HTML elements through the DOM was especially insightful for ensuring the page only presents data when it's asked for. This code is especially verbose and requires the use of commments to assist in the organization of the many functions.
* Working around issues presents problems for later down the road. When creating the DOM, the function to update an education event worked for recording the data in the database but did not give any data back from the controller to the DOM. I was able to code around the problem and still get the data to the frontend but I wasn't able to determine why the controller function was not behaving as expected. The following weekend, during the Angular frontend creation assignment, I essentially ran into the same problem. The error did not present itself as succinctly as it did when creating the DOM but I knew it had to be the same issue since the result was the same. Deciding to revisit the issue I was able to come up with better questions that lead to the answer I wasn't able to determine the previous weekend. The controller was setting an HTTP response code of 204 which I discovered doesn't return data. Changing the response code to 201 allowed my Angular frontend to function as desired. 
* Building up an Angular frontend for the first time I got a much better understanding of the three-layers of the front end (model, component and service), how they interact and how the connection between the service and the backend controller is made. The brightest lightbulb moment for this service-to-controller connction for me was the realization that the service DOES NOT need to provide arguments for a controllers parameter annotated as a path variable. Instead, the path variable is provider for in the URL path itself. 


## Technologies 

* Angular
* AWS- EC2
* Bootstrap
* Git
* GitHub
* Gradle
* Java 
* MySQL Workbench
* Postman
* RESTful Services
* SpringToolSuite4
* Spring Data JPA
* Spring Boot
* Spring MVC
* Terminal -zsh
* TypeScript

## Stretch/Future Goals


After a minimum viable product is produced, the intent for this application is to incorporate the remaining tables of the database as seen above. At this time, only the "education_event" table is utilized. It is my intent to also use this first concept, once fully functional, to inspire new ideas beyond what I've already imagined. Current stretch goals include...
* Google Maps through the address table for parents to be able to remember a site should they choose to later revisit and share the location with fellow homeschool families.
* Create a login functionality 
* Allow users to download an Excel or Numbers version of their data as a backup or for audit purposes
* Create charts and graphs that show progress over time through each grade year
* Allow for tracking of resources used to teach different subjects across each grade
* Use the application as a centerpiece for a homeschool forum
* The final HTML file should be extremely limited with only the options to view the different data presented. Once viewed, each resulting data field should be closable to ensure minimal clutter.

After careful consideration of all the desired functionality with my wife has been made, work will begin on a separate branch while retaining the original work. 

## A Few Screen Shots Of Code Taken During The Development Journey

* Code excerpt for adding a new Education Event in the database. Extra code was written to ensure default values for the subject being recorded and the date when the event occurred. By setting the subject to "Not Declared" the intent is to raise awareness to the user so they will update then event with the correct subject. The date is set to "now" as this will most likely be the case if the user is recording updates in real time. Regardless, it serves as a starting point.

 <p align="center"><img src="media/codeAddEvent.png" width="350"></p>
 
* Code excerpt of how an event is updated. Every field is verified through if/else logic.

 <p align="center"><img src="media/codeUpdateEvent.png" width="350"></p>
 
* Code excerpt of how an event is deleted and ensuring a 404 code is returned when the event being referred to no longer exists.

 <p align="center"><img src="media/codeControllerDelete.png" width="350"></p>
 
* Example code excerpt showing the verboseness of using vanilla Javascript to tie the backend to the frontend. This excerpt uses the DOM to populate the HTML file with a pre-populated form for the user to perform updates to a record and continues past what you see here. 

 <p align="center"><img src="media/vanillaJSExample.png" width="350"></p>
 
 * The very first iteration of the Angular/Bootstrap frontend. Not much to look at just yet but work has just begun!
 
 <p align="center"><img src="media/angularFirstPass.png" width="350"></p>