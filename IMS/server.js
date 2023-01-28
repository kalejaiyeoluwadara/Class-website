// // This is an example of a function that allows users to post comments
// // and saves them globally to the website

// // Assume that the comments are stored in an array called "comments"
// var reply = document.getElementById("reply");
// var store = document.querySelector(".replies");
// function server(){
// postComment(reply.value);
// reply.value = '';
// }
// var comments = [];

// function postComment(comment) {
//   // Add the new comment to the array of comments
//   comments.push(comment);
//   // Display the new comment on the website
//   store.innerHTML += `<p>${comment}</p><hr/>`;
//   // Send the new comment to the server to be saved globally
//   saveCommentToServer(comment);
// }

// function saveCommentToServer(comment) {
//   // Send the comment to the server using an HTTP request
//   fetch("/saveComment", {
//     method: "POST",
//     body: JSON.stringify({ comment: comment }),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Comment saved successfully: ", data);
//     })
//     .catch((error) => {
//       console.error("Error saving comment: ", error);
//     });
// }










const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var comments = [];

app.post('/saveComment', (req, res) => {
  comments.push(req.body.comment);
  res.status(200).json({ message: 'Comment saved successfully' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
var reply = document.getElementById("reply");
var store = document.querySelector(".replies");
function server(){
postComment(reply.value);
reply.value = '';
}

function postComment(comment) {
  // Add the new comment to the array of comments
  // Display the new comment on the website
  store.innerHTML += `<p>${comment}</p><hr/>`;
  // Send the new comment to the server to be saved globally
  saveCommentToServer(comment);
}

function saveCommentToServer(comment) {
  // Send the comment to the server using an HTTP request
  fetch("http://192.168.110.135:3000/saveComment", {
    method: "POST",
    body: JSON.stringify({ comment: comment }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Comment saved successfully: ", data);
    })
    .catch((error) => {
      console.error("Error saving comment: ", error);
    });
}
