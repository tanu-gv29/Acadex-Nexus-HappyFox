// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const TestPage = () => {
//     const { examId } = useParams();
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState({});

//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/exa/generate_test/${examId}/`)
//             .then((response) => response.json())
//             .then((data) => setQuestions(data.questions))
//             .catch((error) => console.error("Error fetching questions:", error));
//     }, [examId]);

//     const handleOptionChange = (questionIndex, selectedOption) => {
//         setAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             [questionIndex]: selectedOption,
//         }));
//     };

//     const handleSubmit = () => {
//         console.log("Submitted Answers:", answers);
//         // You can send the answers to the backend if needed
//     };

//     return (
//         <div>
//             <h2>Test</h2>
//             {questions.length === 0 ? (
//                 <p>Loading questions...</p>
//             ) : (
//                 <form>
//                     {questions.map((question, index) => (
//                         <div key={index} style={{ marginBottom: "20px" }}>
//                             <p><b>{index + 1}. {question.question}</b></p>
//                             {question.options.map((option, optionIndex) => (
//                                 <div key={optionIndex}>
//                                     <input
//                                         type="radio"
//                                         id={`q${index}-option${optionIndex}`}
//                                         name={`question-${index}`}
//                                         value={option}
//                                         checked={answers[index] === option}
//                                         onChange={() => handleOptionChange(index, option)}
//                                     />
//                                     <label htmlFor={`q${index}-option${optionIndex}`}>
//                                         {option}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                     <button type="button" onClick={handleSubmit}>Submit</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default TestPage;



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const TestPage = () => {
//   const { examId } = useParams();
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/exa/generate_test/${examId}/`)
//       .then((response) => response.json())
//       .then((data) => setQuestions(data.questions))
//       .catch((error) => console.error("Error fetching questions:", error));
//   }, [examId]);

//   const handleOptionChange = (questionIndex, selectedOption) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionIndex]: selectedOption,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Submitted Answers:", answers);
//     // You can send the answers to the backend if needed
//   };

//   // Inline styles
//   const containerStyle = {
//     maxWidth: "800px",
//     margin: "40px auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     backgroundColor: "#fdfdfd",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     color: "#333",
//     fontSize: "2rem",
//     marginBottom: "20px",
//   };

//   const questionContainerStyle = {
//     marginBottom: "20px",
//     padding: "15px",
//     backgroundColor: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//   };

//   const questionTextStyle = {
//     marginBottom: "10px",
//     fontWeight: "bold",
//     color: "#333",
//   };

//   const optionContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "8px",
//   };

//   const radioStyle = {
//     marginRight: "8px",
//   };

//   const labelStyle = {
//     color: "#555",
//   };

//   const submitButtonStyle = {
//     display: "block",
//     margin: "30px auto 0",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "4px",
//     backgroundColor: "#1e90ff",
//     color: "#fff",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Test</h2>
//       {questions.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#777" }}>Loading questions...</p>
//       ) : (
//         <form>
//           {questions.map((question, index) => (
//             <div key={index} style={questionContainerStyle}>
//               <p style={questionTextStyle}>
//                 {index + 1}. {question.question}
//               </p>
//               {question.options.map((option, optionIndex) => (
//                 <div key={optionIndex} style={optionContainerStyle}>
//                   <input
//                     type="radio"
//                     id={`q${index}-option${optionIndex}`}
//                     name={`question-${index}`}
//                     value={option}
//                     checked={answers[index] === option}
//                     onChange={() => handleOptionChange(index, option)}
//                     style={radioStyle}
//                   />
//                   <label htmlFor={`q${index}-option${optionIndex}`} style={labelStyle}>
//                     {option}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             style={submitButtonStyle}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.backgroundColor = "#1c86ee")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.backgroundColor = "#1e90ff")
//             }
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default TestPage;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TestPage = () => {
  const { examId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/exa/generate_test/${examId}/`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error("Error fetching questions:", error));
  }, [examId]);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    // You can send the answers to the backend if needed
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#fdfdfd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const questionContainerStyle = {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };

  const questionTextStyle = {
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#333",
    fontSize: "1.1rem",
  };

  const optionContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const radioStyle = {
    marginRight: "8px",
    transform: "scale(1.2)", // Slightly larger radio for better visibility
  };

  const labelStyle = {
    color: "#555",
    fontSize: "1rem",
  };

  const submitButtonStyle = {
    display: "block",
    margin: "30px auto 0",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#1e90ff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Test</h2>
      {questions.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>Loading questions...</p>
      ) : (
        <form>
          {questions.map((question, index) => (
            <div key={index} style={questionContainerStyle}>
              <p style={questionTextStyle}>
                {index + 1}. {question.question}
              </p>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} style={optionContainerStyle}>
                  <input
                    type="radio"
                    id={`q${index}-option${optionIndex}`}
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                    style={radioStyle}
                  />
                  <label
                    htmlFor={`q${index}-option${optionIndex}`}
                    style={labelStyle}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            type="button"
            onClick={handleSubmit}
            style={submitButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1c86ee")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e90ff")}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default TestPage;
