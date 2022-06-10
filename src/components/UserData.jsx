import React from "react";
import { useState } from "react";
import "../App.css";

function UserData() {
  const [userData, setUserData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  fetch(process.env.USER_DATA)
    .then((res) => res.json())
    .then((json) => {
      setUserData(json);
      setDataLoaded(true);
    });

  if (!dataLoaded) {
    return (
      <div>
        <h1>Loading profile wait some time....</h1>
      </div>
    );
  }

  return (
    <div className="profile">
      {
        <div className="userDetails">
          <img
            className="profile-pic"
            src={userData["data"].pictureUrl}
            alt="profile-pic"
          />
          <hr />
          <li> <strong>Name</strong> :{userData["data"].name}</li>
          <li> <strong>College</strong> :{userData["data"].college}</li>
        </div>
      }
    </div>
  );
}

export default UserData;
