import React from 'react';
import './acads.css';
import grp from "..\grp photo.jpg" 


const AcademicInfo = () => {
  return (
    <div className="academic-container">
      <div className="academic-box left-box">
        <div className="image-area">
          <img
            src={grp} // Replace with the actual image path
            alt="Left Image"
            className="side-image left-image"
          />
        </div>
        <h2>Honours Programme</h2>
        <div className="content">
          <ul>
            <li>
              To obtain an honours degree, students will have to maintain a CPA greater than or equal to 8.5.
            </li>
            <li>
              Complete a 27-credit project (wherein one is expected to put in 27 hours of work every week throughout the 16-week semester).
            </li>
            <li>
              Earn at least 18 of the free elective credits in their parent department.
            </li>
            <li>
              The programme is open to only BTech and Dual Degree students.
            </li>
          </ul>
        </div>
      </div>

      <div className="academic-box right-box">
        <div className="image-area">
          <img
            src="freshers\src\pics\grp photo.jpg" // Replace with the actual image path
            alt="Right Image"
            className="side-image right-image"
          />
        </div>
        <h2>Academic Schedule</h2>
        <div className="content">
          <ul>
            <li>
              The working hours of the Institute are between 8:00 AM to 5:30 PM on weekdays, with an hour's usually break at 12 PM for lunch.
            </li>
            <li>
              Each class hour, or 'slot' (named according to the pattern of teaching hours of courses offered over a week), consists of 50 minutes allotted for the lecture and 10 minutes left free to move from class to class, grab a quick bite, or just relax.
            </li>
            <li>
              Usually, a couple of slots will be left free every day, which doesn't make it a day of continuous classes.
            </li>
            <li>
              Please refer to the Institute Timetable for a better understanding of the slots.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfo;

