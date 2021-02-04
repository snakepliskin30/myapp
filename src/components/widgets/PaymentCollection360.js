import React from "react";

const PaymentCollection360 = () => {
  return (
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
  );
};

export default PaymentCollection360;
