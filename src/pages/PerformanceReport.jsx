import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PerformanceReport = () => {
  const { examId } = useParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/exa/submit_test/${examId}/`, {
          answers: JSON.parse(localStorage.getItem("userAnswers")) || {},
        });

        setReport(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching report:", error);
        setLoading(false);
      }
    };

    fetchReport();
  }, [examId]);

  if (loading) return <p>Loading report...</p>;

  return (
    <div>
      <h1>Performance Report</h1>
      <h2>Score: {report.score}%</h2>

      <h3>Detailed Results</h3>
      <ul>
        {report.results.map((result, index) => (
          <li key={index}>
            <strong>Q: {result.question}</strong>
            <p>Your Answer: {result.user_answer || "Not Answered"}</p>
            <p>Correct Answer: {result.correct_answer}</p>
            <p>{result.is_correct ? "✅ Correct" : "❌ Incorrect"}</p>
          </li>
        ))}
      </ul>

      <h3>AI-Generated Feedback</h3>
      <p>{report.performance_report}</p>
    </div>
  );
};

export default PerformanceReport;
