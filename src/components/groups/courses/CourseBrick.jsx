import React, { useEffect, useState } from "react";
import makeApiCall from "../../../Api/api";
import ImageGallery from "../../ImageGallery";
// Ensure this is the correct path to your ImageGallery component
import { useNavigate } from "react-router-dom";
function CourseBrick() {
  const [allCoursesData, setAllCoursesData] = useState({ courses: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const navigate = useNavigate();

  const fetchCourses = async () => {
    const groupId = "1iU1S6A9sYeUb2Bwu2vI"; // Replace with the actual group ID or fetch it dynamically
    try {
      const url = `https://jusaskin.herokuapp.com/api/courses/courses-by-group/${groupId}`;
      const data = await makeApiCall(url, { method: "GET" });
      if (data.courses) {
        setAllCoursesData(data);
      } else {
        setAllCoursesData({ courses: [] }); // Default to empty array if no courses
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError("Failed to fetch courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {allCoursesData.courses.length > 0 ? (
        allCoursesData.courses.map((item) => (
          <div
            onClick={() => {
              navigate(`/course/${item.id}`);
            }}
          >
            {" "}
            <ImageGallery
              key={item.id} // Ensure each item has a unique id or key
              url={item.coursePic || item.coursePic[0]}
              title={item.courseName}
              creator={item.createdBy}
              className="flex-shrink-0"
            />
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
}

export default CourseBrick;
