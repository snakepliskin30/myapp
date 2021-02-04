import React from "react";

const BillingSummary360 = () => {
  return (
    <div className="left-widget bill-sum">
      <div className="widget-header">
        <div className="circle-container bg-bluegreen">
          <i className="fas fa-file-invoice-dollar circle-logo-icon">{}</i>
        </div>
        <h4>Billing Summary</h4>
        <ul className="link-list">
          <li>
            <a href="/">View History</a>
          </li>
          <li>
            <a href="/">View Current Bill</a>
          </li>
          <li>
            <a href="/">Launch Bill Inquiry</a>
          </li>
        </ul>
      </div>
      <hr className="x-line-thin acct-x-line" />
      <div className="bill-sum-fields">
        <div className="bill-sum-fields-col">
          <h6 className="field-label">Past Due Balance</h6>
          <h5 className="field-value" id="past-due-bal">
            {}
          </h5>
          <h6 className="field-label">Bill Due Date</h6>
          <h5 className="field-value" id="due-date">
            {}
          </h5>
          <h6 className="field-label">Next Reading Date</h6>
          <h5 className="field-value" id="next-read-date">
            {}
          </h5>
        </div>
        <div className="bill-sum-fields-col">
          <h6 className="field-label">Balance Due</h6>
          <h5 className="field-value" id="bal-due">
            {}
          </h5>
          <h6 className="field-label">PA Balance</h6>
          <h5 className="field-value" id="pa-bal">
            {}
          </h5>
          <h6 className="field-label">Excess Credit</h6>
          <h5 className="field-value" id="ex-credit">
            {}
          </h5>
        </div>
        <div className="bill-sum-fields-col">
          <h6 className="field-label">Current Charges</h6>
          <h5 className="field-value" id="curr-charges">
            {}
          </h5>
          <h6 className="field-label">Total Balance Due</h6>
          <h5 className="field-value" id="total-bal-due">
            {}
          </h5>
          <h6 className="field-label">Supplier Name</h6>
          <h5 className="field-value" id="supplier-name">
            {}
          </h5>
        </div>
        <div className="bill-sum-fields-col">
          <h6 className="field-label">New Charges</h6>
          <h5 className="field-value" id="new-charges">
            {}
          </h5>
          <h6 className="field-label">Balance Forward</h6>
          <h5 className="field-value" id="bal-forward">
            {}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BillingSummary360;
