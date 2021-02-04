import React from "react";
import BillingSummary360 from "./BillingSummary360";
import PaymentCollection360 from "./PaymentCollection360";

const Main360 = () => {
  return (
    <>
      <div className="left-widgets">
        <BillingSummary360 />
        <div className="left-widget-2 pay-arr">
          <div className="widget-header">
            <div className="circle-container bg-orange">
              <i className="fas fa-file-invoice-dollar circle-logo-icon">{}</i>
            </div>
            <h4>Payment &amp; Collection</h4>
            <ul className="link-list">
              <li>
                <a href="/">View History</a>
              </li>
              <li>
                <a href="/">Launch Paymentus</a>
              </li>
              <li>
                <a href="/">Check PA Eligibility</a>
              </li>
            </ul>
          </div>
          <hr className="x-line-thin acct-x-line" />
          <div className="bill-sum-fields">
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Collection Status</h6>
              <h5 className="field-value" id="col-status">
                test
              </h5>
              <h6 className="field-label">Payment Date</h6>
              <h5 className="field-value" id="pay-date">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Disconnect Notice</h6>
              <h5 className="field-value" id="disc-notice">
                {}
              </h5>
              <h6 className="field-label">Pending Payment</h6>
              <h5 className="field-value" id="pending-payment">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Disconnect Notice Expiration Date</h6>
              <h5 className="field-value" id="disc-notice-exp-date">
                {}
              </h5>
              <h6 className="field-label">Pending Method</h6>
              <h5 className="field-value" id="pending-method">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Restoration Amount</h6>
              <h5 className="field-value" id="rest-amt">
                {}
              </h5>
              <h6 className="field-label">Outstanding Deposit</h6>
              <h5 className="field-value" id="out-deposit">
                {}
              </h5>
            </div>
          </div>
        </div>
        <div className="left-widget-3 svc-meter">
          <div className="widget-header">
            <div className="circle-container bg-purple">
              <i className="fas fa-file-invoice-dollar circle-logo-icon">{}</i>
            </div>
            <h4>Servine &amp; Meter Info</h4>
            <ul className="link-list">
              <li>
                <a href="/">View Service Order</a>
              </li>
              <li>
                <a href="/">View Details</a>
              </li>
            </ul>
          </div>
          <hr className="x-line-thin acct-x-line" />
          <div className="bill-sum-fields">
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Pending Service Orders</h6>
              <h5 className="field-value" id="pending-svc-order">
                {}
              </h5>
              <h6 className="field-label">Meter Status</h6>
              <h5 className="field-value" id="meter-status">
                {}
              </h5>
              <h6 className="field-label">Transformer / Grid #</h6>
              <h5 className="field-value" id="trans-grid">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Service Type</h6>
              <h5 className="field-value" id="svc-type">
                {}
              </h5>
              <h6 className="field-label">Meter Location</h6>
              <h5 className="field-value" id="meter-loc">
                {}
              </h5>
              <h6 className="field-label">T-Rated</h6>
              <h5 className="field-value" id="t-rated">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Meter Type</h6>
              <h5 className="field-value" id="meter-type">
                {}
              </h5>
              <h6 className="field-label">Meter Cut Location</h6>
              <h5 className="field-value" id="meter-cut-loc">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label"># of Meters</h6>
              <h5 className="field-value" id="num-meters">
                {}
              </h5>
              <h6 className="field-label">Next Read Date</h6>
              <h5 className="field-value" id="next-read-date">
                {}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="right-widgets">
        <div className="right-widget-1 outage-sum">
          <div className="widget-header">
            <div className="circle-container bg-yellow">
              <i className="fas fa-file-invoice-dollar circle-logo-icon">{}</i>
            </div>
            <h4>Outage Status</h4>
            <ul className="link-list">
              <li>
                <a href="/">Report an Outage</a>
              </li>
              <li>
                <a href="/">View Outage History</a>
              </li>
            </ul>
          </div>
          <hr className="x-line-thin acct-x-line" />
          <div className="bill-sum-fields">
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Outage Status</h6>
              <h5 className="field-value" id="outage-status">
                {}
              </h5>
              <h6 className="field-label">Probable Cause</h6>
              <h5 className="field-value" id="probable-cause">
                {}
              </h5>
              <h6 className="field-label">Transformer #</h6>
              <h5 className="field-value" id="trans-num">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">Outage Reported</h6>
              <h5 className="field-value" id="outage-rep">
                {}
              </h5>
              <h6 className="field-label"># of Customers Out</h6>
              <h5 className="field-value" id="num-cust-out">
                {}
              </h5>
              <h6 className="field-label">Life Support</h6>
              <h5 className="field-value" id="life-support">
                {}
              </h5>
            </div>
            <div className="bill-sum-fields-col">
              <h6 className="field-label">ETR</h6>
              <h5 className="field-value" id="etr">
                {}
              </h5>
              <h6 className="field-label">Feeder Number</h6>
              <h5 className="field-value" id="feeder-num">
                {}
              </h5>
            </div>
          </div>
        </div>
        <div className="right-widget-1 programs">
          <div className="widget-header">
            <div className="circle-container bg-green">
              <i className="fas fa-file-invoice-dollar circle-logo-icon">{}</i>
            </div>
            <h4>Recommended Programs</h4>
          </div>
          <hr className="x-line-thin acct-x-line" />
        </div>
      </div>
    </>
  );
};

export default Main360;
