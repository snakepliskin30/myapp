import React from "react";
import { connect } from "react-redux";

const AccountDashboard = ({ accountData }) => {
  return (
    //<div className="acct-info">
    <div>
      <div className="main-info">
        <div className="logo">
          <img src="/img/Avatar.png" alt="avatar" />
        </div>
        <div className="info-group">
          <div className="info-1">
            <h6 id="acct-num">{accountData && accountData.id}</h6>
            <a className="btn-link-sm" href="/">
              Start Service
            </a>
          </div>
          <div info-2>
            <h3 id="acct-name">{accountData && accountData["full-name"]}</h3>
            <h6 id="addr-line-1">
              {accountData && accountData["addr-line-1"]}
            </h6>
            <h6 id="addr-line-2">
              {accountData && accountData["addr-line-2"]}
            </h6>
          </div>
        </div>
      </div>
      <hr className="x-line-thin acct-x-line" />
      <div className="main-headers">
        <h4>
          <i className="far fa-address-book icon color-primary"></i>Account
          Summary
        </h4>
        <a className="btn-link-sm" href="/">
          View Sub Accounts
        </a>
      </div>
      <hr className="x-line-thin acct-x-line" />
      <div className="acct-summary">
        <div className="acct-summary-group">
          <div className="acct-sum-col-1">
            <h6 className="field-label">Account Type</h6>
            <h5 className="field-value" id="acct-type">
              {accountData && accountData.type}
            </h5>
            <h6 className="field-label">Customer Type</h6>
            <h5 className="field-value" id="cust-type">
              {accountData && accountData["cust_type"]}
            </h5>
            <h6 className="field-label">Date of Birth</h6>
            <h5 className="field-value" id="dob">
              {accountData && accountData.dob}
            </h5>
            <h6 className="field-label">Work District</h6>
            <h5 className="field-value" id="work-dist">
              {accountData && accountData["work-district"]}
            </h5>
            <h6 className="field-label">Primary Phone #</h6>
            <h5 className="field-value" id="prim-phone">
              {accountData && accountData["primary-phone"]}
            </h5>
          </div>
          <div className="acct-sum-col-2">
            <h6 className="field-label">Account Status</h6>
            <h5 className="field-value" id="acct-status">
              {accountData && accountData.status}
            </h5>
            <h6 className="field-label">SSN / TIN</h6>
            <h5 className="field-value" id="ssn">
              {accountData && accountData.ssn}
            </h5>
            <h6 className="field-label">Collection Status</h6>
            <h5 className="field-value" id="coll-status">
              {accountData && accountData["col-status"]}
            </h5>
            <h6 className="field-label">Landlord Agreement</h6>
            <h5 className="field-value" id="landlord">
              {accountData && accountData.landlord}
            </h5>
            <h6 className="field-label">Alternate Phone #</h6>
            <h5 className="field-value" id="alt-phone">
              {}
            </h5>
          </div>
        </div>
        <h6 className="field-label">Email</h6>
        <h5 className="field-value" id="email">
          {accountData && accountData.email}
        </h5>
        <div className="alert-header">
          <h4>
            <i className="fas fa-user-friends icon color-primary"></i>Critical
            Alerts
          </h4>
          <a className="btn-link-sm" href="/">
            View All
          </a>
        </div>
      </div>
      <hr className="x-line-thin acct-x-line" />
      <div className="alerts">
        <a className="btn-link-sm" href="/">
          Foreign Wiring (FW)
        </a>
        <a className="btn-link-sm" href="/">
          Meter Mix-Up
        </a>
        <a className="btn-link-sm" href="/">
          High-Bill
        </a>
      </div>
      <div className="enrolled-programs">
        <div className="program-header">
          <h4>
            <i className="fas fa-trophy icon color-primary"></i>Enrolled
            Programs
          </h4>
        </div>
        <hr className="x-line-thin acct-x-line" />
        <div className="enrolled-prog">
          <a className="btn-link-sm" href="/">
            Autopay
          </a>
          <a className="btn-link-sm" href="/">
            Budget Billing
          </a>
          <a className="btn-link-sm" href="/">
            eBill
          </a>
        </div>
      </div>
    </div>
    //</div>
  );
};

const mapStateToProps = (state) => {
  return {
    accountData: state.accountData,
  };
};

export default connect(mapStateToProps)(AccountDashboard);
