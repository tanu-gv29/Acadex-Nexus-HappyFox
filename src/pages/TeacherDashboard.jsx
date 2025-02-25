

// import React, { useState, useEffect } from "react";

// const TeacherDashboard = () => {
//     const [course, setCourse] = useState("");
//     const [examDate, setExamDate] = useState("");
//     const [portions, setPortions] = useState("");
//     const [exams, setExams] = useState([]);

//     useEffect(() => {
//         fetchExams();
//     }, []);

//     const fetchExams = async () => {
//         try {
//             const response = await fetch("http://127.0.0.1:8000/exa/api/teacher-dashboard/");
//             const data = await response.json();
//             setExams(data.exams);
//         } catch (error) {
//             console.error("Error fetching exams:", error);
//         }
//     };

//     const handleAnnounceExam = async () => {
//         if (!course || !examDate || !portions) {
//             alert("All fields are required!");
//             return;
//         }

//         const examData = {
//             course_name: course,
//             exam_date: examDate,
//             portions: portions,
//         };

//         try {
//             const response = await fetch("http://127.0.0.1:8000/exa/api/teacher-dashboard/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(examData),
//             });

//             if (response.ok) {
//                 alert("Exam announced successfully!");
//                 setCourse("");
//                 setExamDate("");
//                 setPortions("");
//                 fetchExams(); // Refresh exam list
//             } else {
//                 alert("Failed to announce exam!");
//             }
//         } catch (error) {
//             console.error("Error announcing exam:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Teacher Dashboard</h2>
//             <div>
//                 <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)}style={{
//     border: "1px solid #ccc",
//     padding: "8px",
//     marginRight: "8px",
//     borderRadius: "4px"
//   }}/>
//                 <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} style={{
//     border: "1px solid #ccc",
//     padding: "8px",
//     marginRight: "8px",
//     borderRadius: "4px"
//   }} />
//                 <textarea placeholder="Portions" value={portions} onChange={(e) => setPortions(e.target.value)}></textarea>
//                 <button onClick={handleAnnounceExam}>Announce Exam</button>
//             </div>

//             <h3>Announced Exams:</h3>
//             <ul>
//                 {exams.map((exam, index) => (
//                     <li key={index}>
//                         {exam.course_name} - {exam.exam_date} ({exam.portions})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TeacherDashboard;


// import React, { useState, useEffect } from "react";

// const TeacherDashboard = () => {
//   const [course, setCourse] = useState("");
//   const [examDate, setExamDate] = useState("");
//   const [portions, setPortions] = useState("");
//   const [exams, setExams] = useState([]);

//   useEffect(() => {
//     fetchExams();
//   }, []);

//   const fetchExams = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/exa/api/teacher-dashboard/");
//       const data = await response.json();
//       setExams(data.exams);
//     } catch (error) {
//       console.error("Error fetching exams:", error);
//     }
//   };

//   const handleAnnounceExam = async () => {
//     if (!course || !examDate || !portions) {
//       alert("All fields are required!");
//       return;
//     }

//     const examData = {
//       course_name: course,
//       exam_date: examDate,
//       portions: portions,
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:8000/exa/api/teacher-dashboard/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(examData),
//       });

//       if (response.ok) {
//         alert("Exam announced successfully!");
//         setCourse("");
//         setExamDate("");
//         setPortions("");
//         fetchExams(); // Refresh exam list
//       } else {
//         alert("Failed to announce exam!");
//       }
//     } catch (error) {
//       console.error("Error announcing exam:", error);
//     }
//   };

  
//   const containerStyle = {
//     maxWidth: "800px",
//     margin: "40px auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     fontSize: "2rem",
//     marginBottom: "20px",
//     color: "#333",
//   };

//   const inputGroupStyle = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "20px",
//   };

//   const inputStyle = {
//     border: "1px solid #ccc",
//     padding: "10px",
//     borderRadius: "4px",
//     backgroundColor: "#fff",
//     color: "#000",
//     fontSize: "1rem",
//     fontFamily: "'Poppins', sans-serif",
//     flex: "0 0 auto",
//   };

//   const textareaStyle = {
//     ...inputStyle,
//     minWidth: "200px",
//     minHeight: "40px",
//     resize: "vertical",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     borderRadius: "4px",
//     border: "none",
//     backgroundColor: "#1e90ff",
//     color: "#fff",
//     fontSize: "1rem",
//     cursor: "pointer",
//     fontWeight: "500",
//     fontFamily: "'Poppins', sans-serif",
//   };

//   const examHeadingStyle = {
//     marginTop: "30px",
//     marginBottom: "10px",
//     fontSize: "1.5rem",
//     color: "#333",
//   };

//   const listStyle = {
//     listStyle: "none",
//     padding: 0,
//   };

//   const listItemStyle = {
//     marginBottom: "8px",
//     backgroundColor: "#f9f9f9",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     padding: "10px",
//     fontSize: "1rem",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Teacher Dashboard</h2>

//       {/* Input Fields */}
//       <div style={inputGroupStyle}>
//         <input
//           type="text"
//           placeholder="Course"
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//           style={inputStyle}
//         />
//         <input
//           type="date"
//           value={examDate}
//           onChange={(e) => setExamDate(e.target.value)}
//           style={inputStyle}
//         />
//         <textarea
//           placeholder="Portions"
//           value={portions}
//           onChange={(e) => setPortions(e.target.value)}
//           style={textareaStyle}
//         ></textarea>
//         <button onClick={handleAnnounceExam} style={buttonStyle}>
//           Announce Exam
//         </button>
//       </div>

//       {/* Announced Exams List */}
//       <h3 style={examHeadingStyle}>Announced Exams:</h3>
//       <ul style={listStyle}>
//         {exams.map((exam, index) => (
//           <li key={index} style={listItemStyle}>
//             <strong>Course:</strong> {exam.course_name} &nbsp; | &nbsp;
//             <strong>Date:</strong> {exam.exam_date} &nbsp; | &nbsp;
//             <strong>Portions:</strong> {exam.portions}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TeacherDashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const [course, setCourse] = useState("");
  const [examDate, setExamDate] = useState("");
  const [portions, setPortions] = useState("");
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/exa/api/teacher-dashboard/");
      const data = await response.json();
      setExams(data.exams);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAnnounceExam = async () => {
    if (!course || !examDate || !portions) {
      alert("All fields are required!");
      return;
    }

    const examData = {
      course_name: course,
      exam_date: examDate,
      portions: portions,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/exa/api/teacher-dashboard/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(examData),
      });

      if (response.ok) {
        alert("Exam announced successfully!");
        setCourse("");
        setExamDate("");
        setPortions("");
        fetchExams(); // Refresh exam list
      } else {
        alert("Failed to announce exam!");
      }
    } catch (error) {
      console.error("Error announcing exam:", error);
    }
  };

  // Inline styles for container, inputs, and buttons
  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
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
  };

  const headerButtonsStyle = {
    display: "flex",
    gap: "10px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#1e90ff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  };

  const inputGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const inputStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1rem",
    fontFamily: "'Poppins', sans-serif",
    flex: "0 0 auto",
  };

  const textareaStyle = {
    ...inputStyle,
    minWidth: "200px",
    minHeight: "40px",
    resize: "vertical",
  };

  const examHeadingStyle = {
    marginTop: "30px",
    marginBottom: "10px",
    fontSize: "1.5rem",
    color: "#333",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: "8px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    fontSize: "1rem",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Teacher Dashboard</h2>
        <div style={headerButtonsStyle}>
          <button 
            style={buttonStyle}
            onClick={() => navigate("/teacherprofile")}
          >
            Profile
          </button>
          <button 
            style={buttonStyle}
            onClick={() => navigate("/mentor1")}
          >
            Availability
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div style={inputGroupStyle}>
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Portions"
          value={portions}
          onChange={(e) => setPortions(e.target.value)}
          style={textareaStyle}
        ></textarea>
        <button onClick={handleAnnounceExam} style={buttonStyle}>
          Announce Exam
        </button>
      </div>

      {/* Announced Exams List */}
      <h3 style={examHeadingStyle}>Announced Exams:</h3>
      <ul style={listStyle}>
        {exams.map((exam, index) => (
          <li key={index} style={listItemStyle}>
            <strong>Course:</strong> {exam.course_name} &nbsp; | &nbsp;
            <strong>Date:</strong> {exam.exam_date} &nbsp; | &nbsp;
            <strong>Portions:</strong> {exam.portions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;

