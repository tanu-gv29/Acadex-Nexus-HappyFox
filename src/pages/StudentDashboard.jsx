

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// const StudentDashboard = () => {
//     const [exams, setExams] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/exa/api/student-dashboard/")
//             .then((response) => response.json())
//             .then((data) => setExams(data.exams))
//             // .then((data) => {
//             //     console.log("Fetched Exams:", data);  // Debugging
//             //     setExams(data.exams);
//             // })
//             .catch((error) => console.error("Error fetching exams:", error));
//     }, []);

//     return (
//         <div>
//             <h2>Student Dashboard</h2>
//             <h3>Upcoming Exams:</h3>
//             {exams.length === 0 ? (
//                 <p>No upcoming exams.</p>
//             ) : (
//                 // <ul>
//                 //     {exams.map((exam) => (
//                 //         <li key={exam.id}>
//                 //             {exam.course_name} - {exam.exam_date} ({exam.portions}) 
//                 //             {" "}
//                 //             <a href={`http://127.0.0.1:8000/exa/generate_test/${exam.id}/`}>
//                 //                 <button>Attempt Test</button>
//                 //             </a>
//                 //         </li>
//                 //     ))}
//                 // </ul>
//                 <ul>
//                     {exams.map((exam) => (
//                         <li key={exam.id}>
//                             {exam.course_name} - {exam.exam_date} ({exam.portions}) 
//                             {" "}
//                             <button onClick={() => navigate(`/test/${exam.id}`)}>
//                                 Attempt Test
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default StudentDashboard;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const StudentDashboard = () => {
//   const [exams, setExams] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/exa/api/student-dashboard/")
//       .then((response) => response.json())
//       .then((data) => setExams(data.exams))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   // Inline styles
//   const containerStyle = {
//     maxWidth: "800px",
//     margin: "40px auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     backgroundColor: "#f4f4f4",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
//   };

//   const headingStyle = {
//     textAlign: "center",
//     color: "#333",
//     fontSize: "2rem",
//     marginBottom: "10px"
//   };

//   const subheadingStyle = {
//     textAlign: "center",
//     color: "#555",
//     fontSize: "1.5rem",
//     marginBottom: "20px"
//   };

//   const noExamsStyle = {
//     textAlign: "center",
//     color: "#777",
//     fontSize: "1rem"
//   };

//   const examListStyle = {
//     listStyle: "none",
//     padding: 0,
//     margin: 0
//   };

//   const examItemStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     padding: "15px",
//     marginBottom: "10px",
//     transition: "background-color 0.3s ease",
//     cursor: "pointer"
//   };

//   const examItemHoverStyle = {
//     backgroundColor: "#eef"
//   };

//   const examInfoStyle = {
//     fontSize: "1rem",
//     color: "#333"
//   };

//   const buttonStyle = {
//     padding: "8px 16px",
//     border: "none",
//     backgroundColor: "#1e90ff",
//     color: "#fff",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     transition: "background-color 0.3s ease"
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Student Dashboard</h2>
//       <h3 style={subheadingStyle}>Upcoming Exams:</h3>
//       {exams.length === 0 ? (
//         <p style={noExamsStyle}>No upcoming exams.</p>
//       ) : (
//         <ul style={examListStyle}>
//           {exams.map((exam) => (
//             <li
//               key={exam.id}
//               style={examItemStyle}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor = examItemHoverStyle.backgroundColor)
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor = examItemStyle.backgroundColor)
//               }
//             >
//               <div style={examInfoStyle}>
//                 <strong>{exam.course_name}</strong> - {exam.exam_date} (
//                 {exam.portions})
//               </div>
//               <button
//                 style={buttonStyle}
//                 onClick={() => navigate(`/test/${exam.id}`)}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#1c86ee")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
//                 }
//               >
//                 Attempt Test
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const StudentDashboard = () => {
//   const [exams, setExams] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/exa/api/student-dashboard/")
//       .then((response) => response.json())
//       .then((data) => setExams(data.exams))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   // Inline styles
//   const containerStyle = {
//     maxWidth: "800px",
//     margin: "40px auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     backgroundColor: "#f4f4f4",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//   };

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//     flexWrap: "wrap",
//     gap: "10px",
//   };

//   const headingStyle = {
//     fontSize: "2rem",
//     color: "#333",
//     margin: 0,
//   };

//   const headerButtonsStyle = {
//     display: "flex",
//     gap: "10px",
//   };

//   const buttonStyle = {
//     padding: "8px 16px",
//     borderRadius: "4px",
//     border: "none",
//     backgroundColor: "#1e90ff",
//     color: "#fff",
//     fontSize: "1rem",
//     cursor: "pointer",
//     fontFamily: "'Poppins', sans-serif",
//   };

//   const subheadingStyle = {
//     textAlign: "center",
//     color: "#555",
//     fontSize: "1.5rem",
//     marginBottom: "20px",
//   };

//   const noExamsStyle = {
//     textAlign: "center",
//     color: "#777",
//     fontSize: "1rem",
//   };

//   const examListStyle = {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//   };

//   const examItemStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     padding: "15px",
//     marginBottom: "10px",
//     transition: "background-color 0.3s ease",
//     cursor: "pointer",
//   };

//   const examItemHoverStyle = {
//     backgroundColor: "#eef",
//   };

//   const examInfoStyle = {
//     fontSize: "1rem",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h2 style={headingStyle}>Student Dashboard</h2>
//         <div style={headerButtonsStyle}>
//           <button
//             style={buttonStyle}
//             onClick={() => navigate("/studentprofile")}
//           >
//             Profile
//           </button>
//           <button
//             style={buttonStyle}
//             onClick={() => navigate("/mentor")}
//           >
//             Project Mentor
//           </button>
//         </div>
//       </div>
//       <h3 style={subheadingStyle}>Upcoming Exams:</h3>
//       {exams.length === 0 ? (
//         <p style={noExamsStyle}>No upcoming exams.</p>
//       ) : (
//         <ul style={examListStyle}>
//           {exams.map((exam) => (
//             <li
//               key={exam.id}
//               style={examItemStyle}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   examItemHoverStyle.backgroundColor)
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   examItemStyle.backgroundColor)
//               }
//             >
//               <div style={examInfoStyle}>
//                 <strong>{exam.course_name}</strong> - {exam.exam_date} (
//                 {exam.portions})
//               </div>
//               <button
//                 style={buttonStyle}
//                 onClick={() => navigate(`/test/${exam.id}`)}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#1c86ee")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor =
//                     buttonStyle.backgroundColor)
//                 }
//               >
//                 Attempt Test
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/exa/api/student-dashboard/")
      .then((response) => response.json())
      .then((data) => setExams(data.exams))
      .catch((error) => console.error("Error fetching exams:", error));
  }, []);

  // Inline styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#333",
    margin: 0,
  };

  const headerButtonsStyle = {
    display: "flex",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#1e90ff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    marginLeft: "10px",
  };

  const subheadingStyle = {
    textAlign: "center",
    color: "#555",
    fontSize: "1.5rem",
    marginBottom: "20px",
  };

  const noExamsStyle = {
    textAlign: "center",
    color: "#777",
    fontSize: "1rem",
  };

  const examListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  // We'll use flex here to help align items in each row.
  // You could also use a grid if you prefer.
  const examItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", 
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "15px",
    marginBottom: "10px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const examItemHoverStyle = {
    backgroundColor: "#eef",
  };

  const examInfoStyle = {
    fontSize: "1rem",
    color: "#333",
    marginRight: "10px",
  };

  // Give the "Attempt Test" button a fixed or minimum width to align them
  const attemptButtonStyle = {
    ...buttonStyle,
    minWidth: "130px", // Adjust as needed (e.g., 130px, 150px)
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Student Dashboard</h2>
        <div style={headerButtonsStyle}>
          <button style={buttonStyle} onClick={() => navigate("/studentprofile")}>
            Profile
          </button>
          <button style={buttonStyle} onClick={() => navigate("/mentor")}>
            Project Mentor
          </button>
        </div>
      </div>
      <h3 style={subheadingStyle}>Upcoming Exams:</h3>
      {exams.length === 0 ? (
        <p style={noExamsStyle}>No upcoming exams.</p>
      ) : (
        <ul style={examListStyle}>
          {exams.map((exam) => (
            <li
              key={exam.id}
              style={examItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  examItemHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  examItemStyle.backgroundColor)
              }
            >
              <div style={examInfoStyle}>
                <strong>{exam.course_name}</strong> - {exam.exam_date} (
                {exam.portions})
              </div>
              <button
                style={attemptButtonStyle}
                onClick={() => navigate(`/test/${exam.id}`)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1c86ee")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Attempt Test
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDashboard;
