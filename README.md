[![Work in Repl.it](https://classroom.github.com/assets/work-in-replit-14baed9a392b3a25080506f3b7b6d57f295ec2978f6f33ec97e36a161684cbe9.svg)](https://classroom.github.com/online_ide?assignment_repo_id=4353777&assignment_repo_type=AssignmentRepo)
# CSE264 Project 2: Building an in memory REST API
## Due: Monday, March 29, 2021 at 11:59 PM
## Please be sure in write your name and Lehigh e-mail address in this README before you submit.

Graham Wandless grw224@lehigh.edu

In this assignment, you will use Node.js and Express.js to create your own REST API for users. You will also write some frontend javascript code to test your REST API.

All the code and packages you need is in this GitHub Classroom repo. Do not install any other packages.

### REST API
Your API will have a collection "Users". You will store these in a global array called Users (this is already included in /routes/users.js).

You will need to implement the following URI routes:

* POST - /users
  * This should accept a JSON body and create a new user element in the users collection. (see User Schema below for structure of JSON body). Should return 404 is any JSON body does not follow this schema. 
* GET - /users
  * Return a JSON listing of all users in memory.
* GET - /users/[username]
  * This should return in JSON the contents on this user. If no such user exists, it should return a 404.
* PUT - /users/[username]
  * This should accept a JSON body and update the user identified by [username]. If this user does not exist, it should create it. (see User Schema below for structure of JSON body). Should return 404 is any JSON body does not follow this schema. 
* DELETE - /users/[username]
  * This should delete the user identified by [username].

Also create search functionality for your API.
* GET - /users?search=[search_Query]
  * Return a JSON listing of all users that have [search_Query] in their name or bio.


Schema for User
* Username
  * Unique username that identifies this and only this user 
* Name
  * Full Name of User
* Bio
  * Bio of User
* Date
  * Date when User was created


### Frontend Testing
You will also need to test the routes listed above, using similar AJAX requests you used in Project 1.  A basic index.pug page with some buttons have been created for you in this project. The code in /public/javascripts/main.js will fire when pressing these buttons. Feel free to add new buttons to create more events, or test other behaviour. Write comments in main.js to describe your tests and what expected output is. 

### Testing
It's advised that you use some REST API testing client like Postman [https://www.postman.com/](https://www.postman.com/) or YARC [https://yet-another-rest-client.com/](https://yet-another-rest-client.com/). This will helping in testing your API. 

### Install and Run
You must have node.js running on your machine. Once you have cloned this project you can run `npm install` to install all the packages for this project. Then running `npm run dev` will run the dev version of this code, which will run this project with nodemon. Nodemon auto-restarts the node server every time you make a change to a file. Very helpful when you are writing and testing code.


### Grading
* **80 Points** - REST API works as descibed in this README. All routes and search works as expected. All inputs are validated and correct errors are returned to client
* **15 Points** - Frontend Test functionality.
* **5 Points** - Backend and Frontend code is well commented and easy to read/follow.

* If code doesn't run/compile you can get no more than a 65. But please write comments and a README to explain what you were trying to do. 
* **important** You can not share, copy or give your code to anyone else for this project (or any other project). This should be only your work. Copying, sharing or giving access of your code to others will result in an academic integrity violation. 



