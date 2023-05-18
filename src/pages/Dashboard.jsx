import React from "react";
 import Img from "./images/R.jpg"

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1>Hello,</h1>
       
        <h2>Atos User</h2>
      </div>
      <div className="div1">
        <h2> Account Balance</h2>
        <h2> $ 112580</h2>
      </div>
      <div className="event">
      <h1>Top Event</h1>
     
      </div>
      

  <div className="card1" style={{width: "18rem"}}>
  <img src= {Img} alt="pic" style={{width : "250px",height :"200px"}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card1" style={{width: "18rem"}}>
  <img src= {Img} alt="pic" style={{width : "250px",height :"200px"}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
