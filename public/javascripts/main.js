/*
 * This files holds all the code to test you REST API
 */

//Run once broswer has loaded everything
window.onload = function () {

// Defines the main URI (change this if running on a different host)
const mainURI = 'https://project-2-rest-api-grw224.grahamwandless.repl.co'


// Creates an XMLHttpRequest object
var xhr = new XMLHttpRequest();

//button event for create
// Currently set up to create a new user
// Running once results in no output
// Running more than once results in a 400 error
document.getElementById("create")
.addEventListener("click",function(e){
    // Sets up the XMLHttpRequest object for POSTing a user
    xhr.open("POST", mainURI + '/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: "grw224",
        name: "Graham Wandless",
        bio: "Student",
        date: "3/25/2021"
    }));
},false);

//button event for read
// Currently set up to search of users with the term "Graham" in them
// If run before running the "create" button, it returns an empty array
// If run after running the "create" button, it returns an array containing only the
// following entry:
// {username: "grw224", name: "Graham Wandless", bio: "Student", date: "3/25/2021"}
document.getElementById("read")
.addEventListener("click",function(e){
    // Fetches the users
    fetch(mainURI + '/users?search=Graham')
    .then(response => response.json())
    .then(data => console.log(data));
},false);

//button event for update
// Currently set up to update the user with username grw224
// If run before running the "create" button, it creates a new entry
// If run after running the "create" button, it updates the entry
// Either way, it outputs nothing, but running the "read" button again returns an array
// containing only the following entry:
// {username: "grw224", name: "Graham S. Wandless", bio: "I'm a student", date: "3/26/2021"}
document.getElementById("update")
.addEventListener("click",function(e){
    // Sets up the XMLHttpRequest object for PUTing a user
    xhr.open("PUT", mainURI + '/users/grw224', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: "grw224",
        name: "Graham S. Wandless",
        bio: "I'm a student",
        date: "3/26/2021"
    }));
},false);

//button event for destroy
// Currently set up to delete the user with username grw224
// Nothing is output when run, regardless of number of times
// After running, running the "read" button outputs an empty array
document.getElementById("destroy")
.addEventListener("click",function(e){
    // Sets up the XMLHttpRequest object for PUTing a user
    xhr.open("DELETE", mainURI + '/users/grw224', true);
    xhr.send();
},false);

};