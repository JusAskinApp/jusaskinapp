import React from "react";

const SubscriptionDetails = ({subscription}) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  return (
    <div>
    <h2>Plan: <strong>{subscription.planName}</strong></h2>
    <h2>Subscription Status: <strong>{subscription.subscription_status}</strong></h2>
    <p>Subscription ID: <strong>{subscription.subscription_id}</strong></p>
    <p>Creation Time: <strong>{formatDate(subscription.subscription_date)}</strong></p>
  </div>
     
  );
};

export default SubscriptionDetails;
