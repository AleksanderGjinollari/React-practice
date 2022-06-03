// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Very beautiful"
        avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:15PM"
        comment="Amazing"
        avatar="https://cdn-icons.flaticon.com/png/512/2042/premium/2042898.png?token=exp=1654282560~hmac=85b7bf3dd80625382067dcd8a3ae2460"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 6:41PM"
        comment="Wow, best thing I've seen today"
        avatar="https://cdn-icons.flaticon.com/png/512/2042/premium/2042907.png?token=exp=1654282578~hmac=44d0b97c10194f87c49c5984d866fd33"
      />
      <CommentDetail
        author="Efi"
        timeAgo="Yesterday at 1:45AM"
        comment="Meh..."
        avatar="https://cdn-icons-png.flaticon.com/512/168/168734.png"
      />
    </div>
  );
};

// Take the  react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
