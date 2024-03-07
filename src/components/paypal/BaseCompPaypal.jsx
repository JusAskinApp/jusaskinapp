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

  useEffect(()=>{
    debugger
// fetch plans
if(JSON.parse(localStorage.userDetail).subscription){
  const subscription = JSON.parse(localStorage.userDetail).subscription;
  setSubscriptionStatus(subscription.subscription_status)
  // setSubscriptionResponse(subscription)
  selectPlan(subscription.planId);

}
fetchPlansData();
 
  },[]);


  const fetchPlansData = async () => {
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
      const responseData = await response.json();
      const width = 600;
      const height = 400;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
      
      // Open the provided URL in a popup window
      window.open(responseData.subscription.links[0].href, 'Subscription Window', windowFeatures);
      // setSubscriptionResponse(responseData.subscription);
    } catch (error) {
      console.error("Error creating subscription:", error);
    }finally{
        setLoading(false);
    }
  };
  const viewSubscriptionDetails = async () => {
    debugger
    // try {
    //   const response = await fetch(
    //     `http://localhost:5000/api/users/subscription_details`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ id: subscriptionResponse.id }),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const responseData = await response.json();
    //   setSubscriptionResponse(responseData.subscription);
    //   console.log("Subscription details:", responseData);
    // } catch (error) {
    //   console.error("Error fetching subscription details:", error);
    // }
    if(JSON.parse(localStorage.userDetail).subscription){
    const subscription = JSON.parse(localStorage.userDetail).subscription;
  setSubscriptionResponse(subscription)
    }
  };
  

  return (
    <div>
      <h1 className="subscription-header">Subscribe and Enjoy Amazing Features of the App</h1>
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
        disabled={!selectedPlan || loading || subscriptionStatus === 'ACTIVE'}
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
