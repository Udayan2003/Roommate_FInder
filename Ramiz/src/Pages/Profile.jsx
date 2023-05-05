import React from "react";
import ProfileEntry from "../Components/ProfileEntry";
import ProfileData from "../data/ProfileData.json"
import { Link } from "react-router-dom";

function Profile() {
    console.log()
    return (
        <div className="bg-gray-900 h-screen">
            <div className="p-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
                        {ProfileData.Profile.map((match, key) => {return <ProfileEntry key={key} name={match.Name} regNo={match.RegNo} email={match.Email} sleepSchedule={match.SleepSchedule} socialAct={match.SocialActivity} clean={match.Cleanliness}/>})}
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="b1.png" alt="Profile" className="rounded-full h-64 mb-2" />
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">Change Profile Picture</button>
                        <Link to="/details">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-6">Modify Personal Details</button> 
                        </Link>
                        <Link to="/user">
                        <button className="bg-green-700 text-white px-4 py-2 rounded-lg mt-6">Go back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;