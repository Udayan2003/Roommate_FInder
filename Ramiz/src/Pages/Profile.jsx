import React, { useEffect, useState } from "react";
import ProfileEntry from "../Components/ProfileEntry";
import { Link } from "react-router-dom";

function Slider(props) {
  const { value, onChange } = props;

  let sleepLabels = null;
  if (value <= 3) {
    sleepLabels = (
      <div className="flex align-left w-full text-white">
        <p className="mt-2">Diurnal </p>
      </div>
    );
  } else if (value >= 3 && value <= 7) {
    sleepLabels = (
      <div className="flex align-left w-full text-white">
        <p className="mt-2">Regular </p>
      </div>
    );
  } else {
    sleepLabels = (
      <div className="flex align-left w-full text-white">
        <p className="mt-2">Nocturnal </p>
      </div>
    );
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        className="w-full slider"
        onChange={onChange}
        disabled={true}
      />
      {sleepLabels}
    </div>
  );
}

function Profile() {
  const [input, setInput] = useState({
    "Name": "",
    "RegNo": "",
    "Email": "",
    "SleepSchedule": "",
    "SocialActivity": "",
    "Cleanliness": ""
  });

  const handleSocialActivityChange = (e) => {
    setInput(prevState => ({ ...prevState, SocialActivity: e.target.value }));
  };

  const handleCleanlinessChange = (e) => {
    setInput(prevState => ({ ...prevState, Cleanliness: e.target.value }));
  };

  const handleSleepScheduleChange = (e) => {
    setInput(prevState => ({ ...prevState, SleepSchedule: e.target.value }));
  };

  const getProfileData = () => {
    fetch("http://localhost:8010/proxy/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      res.json().then((data) => {
        setInput(data);
      });
    });
  };

    useEffect(getProfileData, []);

    return (
        <div className="bg-gray-900 h-auto">
            <div className="p-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
                        <ProfileEntry
                            name={input.Name}
                            regNo={input.RegNo}
                            email={input.Email}
                            sleepSchedule={
                                <Slider value={input.SleepSchedule} onChange={handleSleepScheduleChange} disabled/>
                              }
                              socialAct={
                                <Slider value={input.SocialActivity} onChange={handleSocialActivityChange} disabled/>
                              }
                              clean={
                                <Slider value={input.Cleanliness} onChange={handleCleanlinessChange} disabled/>
                              }
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="b1.png"
                            alt="Profile"
                            className="rounded-full h-64 mb-2"
                        />
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
                            Change Profile Picture
                        </button>
                        <Link to="/details">
                            <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-6">
                                Modify Personal Details
                            </button>
                        </Link>
                        <Link to="/user">
                            <button className="bg-green-700 text-white px-4 py-2 rounded-lg mt-6">
                                Go back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
