import React, { useEffect, useState } from "react";
import SubscriptionDetails from "./SubscriptionDetails";
import Button from '@mui/material/Button';
import './plansStyling.css'
import CircularProgress from '@mui/material/CircularProgress';

function BaseCompPaypal() {
  const [subscriptionResponse, setSubscriptionResponse] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const [subscriptionStatus, setSubscriptionStatus] = useState();
  const [trial, setTrial] = useState(false)

  useEffect(()=>{
    debugger
// fetch plans
if(JSON.parse(localStorage.userDetail).subscription){
  const subscription = JSON.parse(localStorage.userDetail).subscription;
  setSubscriptionStatus(subscription.subscription_status)
  selectPlan(subscription.planId);

}
fetchPlansData();
subscriptionHandler();
 
  },[]);

  function subscriptionHandler() {
    const current_date = new Date();
    const signup_date = new Date(JSON.parse(localStorage.userDetail).signup_date);
    const timeDifference = current_date.getTime() - signup_date.getTime();
    const daysPassed = timeDifference / (1000 * 3600 * 24);
  
    if (daysPassed < 30) {
      setTrial(true)
    } else {
      setTrial(false)
      try {
        const userDetail = JSON.parse(localStorage.userDetail);
        const subscription = userDetail.subscription;
        if (subscription && subscription.subscription_status === "ACTIVE") {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
        console.error("Error accessing subscription details:", error);
      }
    }
  }


  const fetchPlansData = async () => {
    debugger
    try {
      const response = await fetch('https://jusaskin.herokuapp.com/api/users/plansdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      console.error('Error fetching plans data:', error);
    }
  };

  const selectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscription = async () => {
    debugger
    try {
        setLoading(true);
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/users/create-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userId: JSON.parse(localStorage.userDetail).id, planId: selectedPlan, planName: selectedPlan === 'P-3LT90857976515246MXDWDYQ' ? 'Basic Monthly' : 'Premium Monthly' }), 
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      const width = 600;
      const height = 400;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
      window.open(result.responseData.links[0].href, 'Subscription Window', windowFeatures);
    } catch (error) {
      console.error("Error creating subscription:", error);
    }finally{
        setLoading(false);
    }
  };
  const viewSubscriptionDetails = async () => {
    debugger
    if(JSON.parse(localStorage.userDetail).subscription){
    const subscription = JSON.parse(localStorage.userDetail).subscription;
  setSubscriptionResponse(subscription)
    }
  };
  

  return (
    <div>
      <h1 className="subscription-header">Subscribe and Enjoy Amazing Features of the App</h1>
      {trial ? (
  <p className="mb-5">
    You are on{" "}
    <span
      style={{
        color: "#fff",
        border: "1px solid #2ecc71", // Green border
        padding: "5px",
        backgroundColor: "#2ecc71", // Green background
        borderRadius: "5px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      Trial
    </span>{" "}
    period
  </p>
) : (
  ""
)}



       <div className="subscription-cards">
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`subscription-card ${selectedPlan === plan.id ? 'selected' : ''}`}
            onClick={() => selectPlan(plan.id)}
          >
            <h2>{plan.name}</h2>
            <p>Description: {plan.description}</p>
          </div>
        ))}
      </div>

      {subscriptionResponse && (
        <SubscriptionDetails subscription={subscriptionResponse} />
      )}
       <div className="button-container">
        {/* <span>Subscription is in PENDING <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>click here</a> to activate</span> */}
        <Button
        style={{marginTop:'10px'}}
        variant="contained"
        color="primary"
        disabled={!selectedPlan || loading || subscriptionStatus === 'ACTIVE' || trial}
        onClick={handleSubscription}
        startIcon={loading && <CircularProgress size={20} />}
      >
        {!selectedPlan ? 'Subscribe' : `Subscribe to ${selectedPlan === 'P-3LT90857976515246MXDWDYQ' ? 'Basic Monthly' : 'Premium Monthly'}`}

       
      </Button>
      <Button
  style={{marginTop:'10px'}}
  variant="outlined"
  color="primary"
  disabled={subscriptionResponse}
  onClick={viewSubscriptionDetails}
>
  View Subscription Details
</Button>
      </div>
    </div>
  );
}

export default BaseCompPaypal;
