import React from "react";

function ProfileEntry({ name, regNo, email, sleepSchedule, socialAct, clean }) {
    if(!regNo){ return (<></>) }
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-6">
                <h2 className="text-xl text-white font-bold mb-2">Name:</h2>
                <p className="text-white">{name}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl text-white font-bold mb-2">Registration Number:</h2>
                <p className="text-white">{regNo}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl text-white font-bold mb-2">Email:</h2>
                <p className="text-white">{email}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl text-white font-bold mb-2">Sleep Schedule:</h2>
                <p className="text-white">{sleepSchedule}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl text-white font-bold mb-2">Social Activity:</h2>
                <p className="text-white">
                    {socialAct}
                </p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl text-white font-bold mb-2">Cleanliness:</h2>
                <p className="text-white">
                    {clean}
                </p>
            </div>
        </div>
    )
}

export default ProfileEntry;