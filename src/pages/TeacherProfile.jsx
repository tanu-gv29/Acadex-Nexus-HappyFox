import React, { useState } from "react";
import "./TeacherProfile.css";

const TeacherProfile = () => {
  const [teacherData, setTeacherData] = useState({
    name: "John Doe",
    staffCode: "123456",
    department: "Computer Science",
    qualification:"phd",
    specialization:"Artificial Intelligence",
    // year: "3rd Year",
    dob: "2002-05-15",
    joiningYear: "2021",
    // passingYear: "2025",
    // photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };


  return (
    <div className="teacher-profile">
      <center><h2>TEACHER PROFILE</h2></center>
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
            <input type="text" name="name" value={teacherData.name} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Staff Code:</strong></label>
            <input type="text" name="staffCode" value={teacherData.staffCode} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Department:</strong></label>
            <input type="text" name="department" value={teacherData.department} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Qualification:</strong></label>
            <input type="text" name="qualification" value={teacherData.qualification} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Specialization:</strong></label>
            <input type="text" name="specialization" value={teacherData.specialization} onChange={handleInputChange} />
          </div>


          <div className="form-group">
            <label><strong>Date of Birth:</strong></label>
            <input type="date" name="dob" value={teacherData.dob} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label><strong>Year of Joining:</strong></label>
            <input type="text" name="joiningYear" value={teacherData.joiningYear} onChange={handleInputChange} />
          </div>

          {/* <div className="form-group">
            <label><strong>Year of Passing:</strong></label>
            <input type="text" name="passingYear" value={studentData.passingYear} onChange={handleInputChange} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
