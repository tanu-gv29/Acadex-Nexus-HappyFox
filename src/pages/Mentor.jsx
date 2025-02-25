import { useState } from "react";
import "./Mentor.css";

const Mentor = ({ requests = [] }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [pendingRequests, setPendingRequests] = useState(requests || []);

  const handleToggleAvailability = () => {
    setIsAvailable((prev) => !prev);
  };

//   const handleAccept = (index) => {
    
//     const newRequests = pendingRequests.filter((_, i) => i !== index);
//     setPendingRequests(newRequests);
//     alert("Request accepted!");
//   };

//   const handleReject = (index) => {
//     const newRequests = pendingRequests.filter((_, i) => i !== index);
//     setPendingRequests(newRequests);
//     alert("Request rejected!");
//   };


  return (
    <div className="mentor-dashboard">
      <h2>Teacher Dashboard</h2>

      <h3 className="subheading">Mentor Allocation</h3>

      {/* BOX WRAPPER for status and student requests */}
      <div className="mentor-box">
        <div className="availability">
          <span className="status-label">Status:</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={handleToggleAvailability}
            />
            <span className="slider"></span>
          </label>
          <span className="status-text">
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>

        <h2>Student Requests</h2>
        {requests.length === 0 ? (
          <p className="no-requests">No requests at the moment.</p>
        ) : (
          requests.map((req, index) => (
            <div key={index} className="request-card">
              <p>
                <strong>{req.studentName}</strong>
                <br />
                <em>{req.projectDomain}</em>
                <br />
                {req.projectDesc}
              </p>
              {isAvailable ? (
                <div className="actions">
                  <button
                    className="accept-btn"
                    onClick={() => handleAccept(index)}
                  >
                    Accept
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleReject(index)}
                  >
                    Reject
                  </button>
                </div>
              ) : (
                <p className="unavailable-msg">
                  Staff not available at the moment.
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mentor;
