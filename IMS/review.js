// This is an example of a function that allows users to post comments
// and saves them globally to the website

// Assume that the comments are stored in an array called "comments"
var comments = [];

function postComment(comment) {
  // Add the new comment to the array of comments
  comments.push(comment);
  // Display the new comment on the website
  document.getElementById("comments").innerHTML += comment + "<br>";
  // Send the new comment to the server to be saved globally
  saveCommentToServer(comment);
}

function saveCommentToServer(comment) {
  // Send the comment to the server using an HTTP request
  fetch("/saveComment", {
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