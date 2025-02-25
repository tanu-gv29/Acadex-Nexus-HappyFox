import { useState } from "react";
import "./ProjectMentor.css";

const mockMentors = [
  { id: "M001", name: "Dr. Rajesh Kumar", specialization: "Machine Learning" },
  { id: "M002", name: "Dr. Priya Sharma", specialization: "Deep Learning" },
  { id: "M003", name: "Dr. Arjun Menon", specialization: "Cybersecurity" },
];

const StudentMentorMatching = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [availableMentors, setAvailableMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState("");

  const handleProjectSubmission = () => {
    // Filter mentors based on specialization
    const matchedMentors = mockMentors.filter(
      (mentor) => mentor.specialization === selectedSpecialization
    );
    setAvailableMentors(matchedMentors);
  };

  return (
    <div className="mentor-container">
      <h2>Student-Mentor Matching</h2>

      {/* Project Submission Section */}
      <div className="form-container">
        <h3>Submit Your Project Details</h3>
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Deep Learning">Deep Learning</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
        <button onClick={handleProjectSubmission}>Find Mentors</button>
      </div>

      {/* Available Mentors Section */}
      {availableMentors.length > 0 && (
        <div className="mentors-container">
          <h3>Available Mentors for {selectedSpecialization}</h3>
          <select
            value={selectedMentor}
            onChange={(e) => setSelectedMentor(e.target.value)}
          >
            <option value="">Select Mentor</option>
            {availableMentors.map((mentor) => (
              <option key={mentor.id} value={mentor.name}>
                {mentor.name}
              </option>
            ))}
          </select>
          <button>Assign Mentor</button>
        </div>
      )}
    </div>
  );
};

export default StudentMentorMatching;
