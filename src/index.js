// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Very beautiful"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:15PM"
          comment="Amazing"
          avatar="https://cdn-icons.flaticon.com/png/512/2042/premium/2042898.png?token=exp=1654282560~hmac=85b7bf3dd80625382067dcd8a3ae2460"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 6:41PM"
          comment="Wow, best thing I've seen today"
          avatar="https://cdn-icons.flaticon.com/png/512/2042/premium/2042907.png?token=exp=1654282578~hmac=44d0b97c10194f87c49c5984d866fd33"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Efi"
          timeAgo="Yesterday at 1:45AM"
          comment="Meh..."
          avatar="https://cdn-icons-png.flaticon.com/512/168/168734.png"
        />
      </ApprovalCard>
    </div>
  );
};

// Take the  react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
