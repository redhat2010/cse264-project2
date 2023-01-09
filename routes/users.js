const express = require('express');
const router = express.Router();

const users = [];
/* Add a new cat object to the users array */
router.get('/', function(req, res, next) {
  // If the request does not have any query parameters, handles the GET request like normal
  if (req.query == null){
    res.send(users);
  }
  // If it does have query parameters, handle it based on those parameters
  else {
    searchterm = req.query.search;
    returnArray = [];
    // Interate through the array of users
    for (user of users) {
      // Checks if the search term is in the user's name, and, if it is, adds the user to
      // the array
      if (user.name.includes(searchterm)) {
        returnArray.push(user);
      }
      // If the search term was not in the user's name, it checks if the search term is in
      // the user's bio, and, if it is, adds the user to the array
      else if (user.bio.includes(searchterm)) {
        returnArray.push(user);
      }
    }

    res.send(returnArray);
  }
});

// Adds a user to the users array
router.post('/', function(req, res, next) {
  var newUser = req.body;
  var status = 201;
  // Checks to make sure the new user has 4 fields
  if (Object.keys(newUser).length != 4)
  {
    status = 404;
  }
  // Checks if any of the 4 required fields are null
  else if (newUser.username == null || newUser.name == null || newUser.bio == null || newUser.date == null)
  {
    status = 404;
  }
  else {
    for (user of users) {
      if (user.username == newUser.username) {
        status = 400;
      }
    }
  }

  // Checks the status, and, if it is 201, adds the new user to the array
  if (status == 201) {
    users.push(newUser);
  }
  res.status(status).send();
});

// Get the user with the specified username
router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  // Searches the array of users for one with the specified username
  for (user of users) {
      if (user.username == username) {
        res.send(user);
        break;
      }
  }
  res.status(404).send();
});



// Put route to update the specified user
router.put('/:username', function(req, res, next) {
  var username = req.params.username;
  var newUser = req.body;
  
  // Checks to make sure the new user has 4 fields
  if (Object.keys(newUser).length != 4) {
    res.status(404).send();
  }
  
  // Checks if any of the 4 required fields are null
  else if (newUser.username == null || newUser.name == null || newUser.bio == null || newUser.date == null)
  {
     res.status(404).send();
  }
  
  // Check if the username for the updated user and the username parameter are the same
  // and, if they are not, check that the new username is not already in the array
  else if (newUser.username != username) {
    res.status(400).send();
    for (user of users) {
      if (user.username == newUser.username) {
         res.status(400).send();
         break;
      }
    }
  }
  
  // If none of the verifications failed, it continues
  else {
    // Searches the array of users for one with the specified username
    for (user of users) {
        // If it finds the user already in the array, it removes them
        if (user.username == username) {
          found = true;
          users.splice(users.indexOf(user), 1)
          break;
        }
    }
    
    // Pushes the new user to the array
    // If they didn't already exist, it creates it
    users.push(newUser);
    res.status(201).send();
  }
});


router.delete('/:username', function(req, res, next) {
  var username = req.params.username;
  // Searches the array of users for one with the specified username
  for (user of users) {
      // If it finds the user, it deletes them from the array
      if (user.username == username) {
          found = true;
          users.splice(users.indexOf(user), 1)
          break;
        }
  }
  res.status(200).send();
});

module.exports = router;
