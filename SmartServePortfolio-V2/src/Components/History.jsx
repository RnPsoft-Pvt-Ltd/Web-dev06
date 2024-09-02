import React from "react";
import Search from "./Search";
import "./History.css";
import searchIcon from "./Images/searchBtn.png";
import msgIcon from "./Images/msg.png";

const conversations = [
  {
    id: 1,
    title: "THW - New email template creation",
    ticketNumber: "#6493",
    raisedBy: "Mariann",
    assignedTo: "Mark Prober",
    priority: "Medium",
    category: "Sales",
    created: "Created 2 days ago",
    responded: "Responded 2 days ago",
  },
  // Add more conversation objects as needed
];

export default function History() {
  return (
    <div className="historyContainer">
      <div className="headerContainer">
        <div className="historyHeader">
          <h1>History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            enim, vitae animi deleniti, nisi distinctio repudiandae, doloribus
            nemo maxime id blanditiis est minus fugit provident.
          </p>
        </div>
        <Search />
      </div>
      <div className="convoContainer">
        <div className="convoHeader">
          <form>
            <input type="text" name="search" placeholder="Search.." />
            <button>J</button>
          </form>
        </div>
        <div className="convoTransactions">
          <h1>All Conversations</h1>
          <div className="convoCard">
            <input type="checkbox" />
            <div className="convoDetails">
              <div className="convoName">
                <div className="cardIcon">M</div>
                <div className="convoReciept">
                  <div className="convoId">
                    <p>THW - New email template creation</p>
                    <p className="id">#6493</p>
                  </div>
                  <span>
                    <img src={msgIcon} alt="" />
                  </span>
                </div>
              </div>
                <div className="convoInfo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
