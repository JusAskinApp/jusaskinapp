import React from "react";
import ImageGallery from "./ImageGallery";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function GroupComponent() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [allgroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const getallgroups = async () => {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/getallgroups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: JSON.parse(
              JSON.parse(JSON.stringify(localStorage)).userDetail
            ).email,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setAllGroups(data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  async function joinGroup(groupid, item) {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/adduseringroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupid: groupid,
            members: JSON.parse(localStorage.getItem("userDetail")),
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/grouphomepage", {
          state: { group: item, join: true },
        });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getallgroups();
  }, []);

  return (
    <div className="bg-white p-4 justify-center">
      <p className="text-lg font-bold mb-4">All Groups</p>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px", // Set the height as needed to center the loader vertically
          }}
        >
          <CircularProgress size={30} color="primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {allgroups.map((item) => (
            <div
              className="border border-solid border-gray-300 rounded-lg shadow-md p-2 transition duration-24.3s flex-shrink-0"
              onClick={() => {
                navigate("/grouphomepage", {
                  state: { group: item, join: item.join },
                });
              }}
            >
              {item.imageurl.length > 0 ? (
                <ImageGallery
                  url={item.imageurl || item.imageurl[0]}
                  title={item.groupname}
                  creator={item.admin.name}
                  className="flex-shrink-0"
                />
              ) : (
                <ImageGallery
                  url="https://firebasestorage.googleapis.com/v0/b/jusaskinapp.appspot.com/o/No%20img.jpg?alt=media&token=d323a262-d2e6-45e4-8503-6b10fbea0e86&_gl=1*1gwntyg*_ga*MTc1ODIxOTgzOC4xNjkwNjkzNTY1*_ga_CW55HF8NVT*MTY5ODY3NzEyMi4yMi4xLjE2OTg2NzcyNzQuNDkuMC4w"
                  title={item.groupname}
                  creator={item.admin.name}
                  className="flex-shrink-0"
                />
              )}
              {/* <Button
                onClick={() => {
                  navigate("/grouphomepage", {
                    state: { group: item, join: item.join },
                  });
                }}
                style={{ float: "right" }}
              >
                View
              </Button> */}
              <Button color="primary" variant="contained"
                style={{ float: "right" }}
                onClick={() => {
                  joinGroup(item.blogRefId, item);
                }}
              >
                {item.join ? "joined" : "join"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GroupComponent;
