import React from "react";
import { useState } from "react";
import "../App.css";
import UserData from "./UserData";

function JobList() {
  const [items, setItems] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  console.log(process.env);

  fetch(process.env.REACT_APP_JOB_OPENINGS)
    .then((res) => res.json())
    .then((json) => {
      setItems(json);
      setDataLoaded(true);
    });
  if (!dataLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }

  return (
    <div>
      {" "}
      <h1>Job Openings</h1>
      <h3>Profile</h3>
      <UserData />
      <div className="row">
        {items["data"].map((item, index) => {
          let exp = item.min_experience;
          return (
            <div className="col col-lg-6">
              <h3>Post-{index + 1}</h3>
              <li>
                {" "}
                <strong>Designation:</strong> {item.designation}
              </li>
              <li>
                {" "}
                <strong>Company:</strong>
                {item.company}{" "}
              </li>
              <li>
                {" "}
                <strong>Job location:</strong> {item.location}
              </li>
              <li>
                {" "}
                <strong>Experience:</strong>
                {exp > 0}? {item.min_experience}:{"Fresher opening"}
              </li>
              <li>
                {" "}
                <strong>Skills required:</strong>{" "}
                {item.skills.map((skill) => {
                  return skill + ",";
                })}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobList;
