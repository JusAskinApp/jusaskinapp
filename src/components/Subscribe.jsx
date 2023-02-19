import React, { useState } from "react";
import myImage from "../assets/LP.png";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlerts from "../components/ErrorAlerts";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [showSuccessAlert, setSuccessShowAlert] = useState(false);
  const [showErrorAlert, setErrorShowAlert] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = () => {
    debugger;
    if (email) {
      fetch(
        "https://backend-justaskin-production.up.railway.app/api/email/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          debugger;
          if (data === "Success") {
            setSuccessShowAlert(true);
            // setEmail('')
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else if (data == "You are already subciber") {
            setError("You are already our subscriber");
            setErrorShowAlert(true);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            setError("Please check your email or network");
            setErrorShowAlert(true);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        })
        .catch((error) => {
          // console.error(error);
          debugger;
        });
    } else {
      setErrorShowAlert(true);
    }
  };
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: "#F0F7F4" }} className="text-center">
      {showSuccessAlert && <SuccessAlert />}
      {showErrorAlert && <ErrorAlerts error={error} />}

      <h2 className="text-5xl font-bold mb-6 pt-20 lg:text-6xl">Learn, Share, Connect</h2>
      <form onSubmit={handleSubmit} className="mx-auto my-8 flex flex-col sm:flex-row sm:justify-center sm:items-center">
  <div className="ml-2 mb-6 sm:mb-0">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email address"
      className="px-3 py-2 rounded-lg w-64"
    />
  </div>

  <div className="ml-2 mb-6 sm:mb-0">
    <select
      id="interest-select"
      value={interest}
      onChange={(e) => setInterest(e.target.value)}
      className="px-3 py-2 rounded-lg w-64"
    >
      <option value="" disabled selected>Select your interest</option>
      <option value="Technology">Technology</option>
      <option value="Business">Business</option>
      <option value="Health">Health</option>
    </select>
  </div>
  <div className="mb-6 ml-2 sm:mb-0">
  <button
    className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600"
    onClick={() => {
      sendEmail();
    }}
  >
    Subscribe
  </button>
  </div>
</form>

      <img src={myImage} alt="image" className="mx-auto" />
    </div>
  );
};

export default Subscribe;
