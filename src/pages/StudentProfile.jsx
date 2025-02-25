import React, { useState } from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  const [studentData, setStudentData] = useState({
    name: "John Doe",
    rollNo: "123456",
    department: "Computer Science",
    year: "3rd Year",
    dob: "2002-05-15",
    joiningYear: "2021",
    passingYear: "2025",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // const handlePhotoUpload = (e) => {
  //   const file = e.target.files[0];
  //   setStudentData({ ...studentData, photo: URL.createObjectURL(file) });
  // };

  return (
    <div className="student-profile">
      <center><h2>STUDENT PROFILE</h2></center>
      <div className="profile-container">
      {/* <div className="profile-photo-section">
          <label className="profile-photo">
            <input type="file" onChange={handlePhotoUpload} />
            {studentData.photo ? (
              <img src={studentData.photo} alt="Profile" />
            ) : (
              <span>Upload Photo</span>
            )}
          </label>
        </div> */}


        <div className="profile-form">
          <div className="form-group">
            <label><strong>Name:</strong></label>
            <input type="text" name="name" value={studentData.name} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Roll No:</strong></label>
            <input type="text" name="rollNo" value={studentData.rollNo} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Department:</strong></label>
            <input type="text" name="department" value={studentData.department} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Year:</strong></label>
            <input type="text" name="year" value={studentData.year} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Date of Birth:</strong></label>
            <input type="date" name="dob" value={studentData.dob} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Year of Joining:</strong></label>
            <input type="text" name="joiningYear" value={studentData.joiningYear} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Year of Passing:</strong></label>
            <input type="text" name="passingYear" value={studentData.passingYear} onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
