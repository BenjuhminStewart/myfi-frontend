import React from "react";
import "./LearnMore.css";
const LearnMore = () => {
  return (
    <div>
      <div className="header-div">
        <h1 className="text-center PADME">About Us</h1>
        <hr className="new54"></hr>
        <p className="p-text">
          We are students from University of Washington Tacoma who made this
          project for TCSS 445 with Eyhab Al-Masri. We were required to make a
          website to use our database knowledge in class. After some debate, we
          all <span className="myfi">Fi</span>gured a{" "}
          <span className="myfi">Fi</span>nance website that we can use after
          the class to track our expenses and help us with budgeting would be
          the most useful. So welcome to My<span className="myfi">Fi</span>, aka
          My
          <span className="myfi">Fi</span>nances
        </p>

        <hr className="new3"></hr>

        <h2 className="text-center">
          What can you do with My<span className="myfi">Fi</span>
        </h2>
        <p className="p-text">
          With My<span className="myfi">Fi</span>, you can Login and Register as
          a certi<span className="myfi">Fi</span>ed user in our database. We use
          password hashing and salt comparison so your password is never seen in
          the database. Upon sign in, a cookie token is assigned to you that is
          also encrypted so no one can get any of your information. After this
          step, you can always go back and change any of your information in the
          settings tab except your username. So write it down if you must! Most
          importantly with My
          <span className="myfi">Fi</span> you can add accounts, add
          transactions and My<span className="myfi">Fi</span> will keep track of
          your spending to tell you which categories you are spending the most
          money on. This way you can budget better and be on your path to make
          more money. We are completely free (for now) and we will be coming out
          with more features even after our initial launch. Stick around and use
          this website and we might just give you a free membership later on for
          your loyalty. Welcome to My<span className="myfi">Fi</span> and Budget
          On!
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
