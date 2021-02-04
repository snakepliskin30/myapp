import React from "react";
import { Route, Switch } from "react-router-dom";

import Main360 from "../widgets/Main360";
import Contact from "../widgets/Contacts";
import ServiceOrders from "../widgets/ServiceOrders";
import AccountInfo from "../widgets/AccountInfo";

const Widgets = ({ id }) => {
  return (
    <Switch>
      <Route path="/" exact component={Main360} />
      <Route path="/contacts" component={Contact} />
      <Route path="/serviceorders" component={ServiceOrders} />
      <Route path="/accountinfo" component={AccountInfo} />
    </Switch>
  );
};

export default Widgets;
