import React, { useState, useEffect } from "react";

const SubscriptionPlans = () => {
  const [planDetails, setPlanDetails] = useState(null);

  // Static plan IDs
  const planIds = ['P-2E895634KU686270PMXD4L6A', 'P-3LT90857976515246MXDWDYQ'];

  useEffect(() => {
    const fetchPlanDetails = async (planId) => {
        debugger;
      try {
        const response = await fetch(`https://api-m.sandbox.paypal.com/v1/billing/plans/${planId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const planData = await response.json();
        setPlanDetails(planData);
      } catch (error) {
        console.error("Error fetching plan details:", error);
      }
    };

    // Fetch details for each static plan ID
    planIds.forEach(fetchPlanDetails);
  }, []); // Empty dependency array to fetch details only once on component mount

  if (!planDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {planDetails.map((planDetail, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", width: "300px" }}>
          <h3>{planDetail.name}</h3>
          <p>{planDetail.description}</p>
          {/* <p>Price: {planDetail.pricing_scheme.fixed_price.value} {planDetail.pricing_scheme.fixed_price.currency_code}</p>
          <p>Interval: {planDetail.billing_cycles[0].frequency.interval_count} {planDetail.billing_cycles[0].frequency.interval_unit}</p> */}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPlans;
