import "../styles/App.css";
import "../styles/responsive.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "./main/Header";
import Footer from "./main/Footer";
import AccountDashboard from "./main/AccountDashboard";
import Navbar from "./main/Navbar";
import Widgets from "./main/Widgets";

import { appendScript } from "../scripts/appendScript";

import { fetchAccount } from "../redux/actions/fetchAccount";
import { connect } from "react-redux";

//import accountapi from "../apis/accountapis";

function App(props) {
  const { fetchAccount } = props;
  let id = useParams().id;
  const [accountid, setAccountId] = useState(id);
  if (id && id !== accountid) {
    setAccountId(id);
  }

  useEffect(() => {
    appendScript("/scripts/main.js");
  }, []);

  // useEffect(() => {
  //   fetchAccount(id);
  // }, [id, fetchAccount]);

  // async function getAccount(id) {
  //   const response = await accountapi.get("/accounts/" + id);

  //   return response;
  // }

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="acct-info-side">
          <AccountDashboard />
        </div>
        <div className="burger">
          <div className="burger-item"></div>
          <div className="burger-item"></div>
          <div className="burger-item"></div>
        </div>
        <div className="panel-group">
          <div className="left-panel">
            <div className="acct-info">
              <AccountDashboard />
            </div>
          </div>
          <div className="right-panel">
            <Navbar id={id} />
            <div className="widget">
              <Widgets id={id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default connect(null, { fetchAccount })(App);
