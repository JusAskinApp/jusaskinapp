import React, { useState } from "react";
import myImage from "../assets/LP.png";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlerts from "../components/ErrorAlerts";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showSuccessAlert, setSuccessShowAlert] = React.useState(false);
  const [showErrorAlert, setErrorShowAlert] = React.useState(false);
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
          body: JSON.stringify({ email: email }),
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
          } else {
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
    // if (!email) {
    //   // setError("Please enter a valid email address.");
    //   return;
    // }
    // setError("");
    // sendEmail();
  };

  return (
    <div style={{ backgroundColor: "#F0F7F4" }} className="text-center">
      {showSuccessAlert && <SuccessAlert />}
      {showErrorAlert && <ErrorAlerts />}

      <h2 className="text-5xl font-bold mb-6 pt-20">Learn, Share, Connect</h2>
      <form onSubmit={handleSubmit} className="mx-auto my-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="px-3 py-2 rounded-lg w-64 mb-6"
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={() => {
            sendEmail();
          }}
        >
          Subscribe
        </button>
      </form>
      <img src={myImage} alt="image" className="mx-auto" />
    </div>
  );
};

export default Subscribe;
