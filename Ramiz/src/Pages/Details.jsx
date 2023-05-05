import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Slider() {
    const [cleanliness, setCleanliness] = useState(0);
    const [sleepSchedule, setSleepSchedule] = useState(0);
    const [socialActivity, setSocialActivity] = useState(0);

    const handleSocialActivityChange = (e) => {
        setSocialActivity(e.target.value);
    }

    const handleCleanlinessChange = (e) => {
        setCleanliness(e.target.value);
    }

    const handleSleepScheduleChange = (e) => {
        setSleepSchedule(e.target.value);
    }

    let sleepLabels = null;
    if (sleepSchedule <= 3) {
        sleepLabels = (
            <div className="flex justify-center w-full text-white">
                <p className="mt-2">Diurnal </p>
            </div>
        );
    } else if (sleepSchedule >= 3 && sleepSchedule <= 7) {
        sleepLabels = (
            <div className="flex justify-center w-full text-white">
                <p className="mt-2">Regular </p>
            </div>
        );
    } else {
        sleepLabels = (
            <div className="flex justify-center w-full text-white">
                <p className="mt-2">Nocturnal </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="mt-6 text-left text-3xl font-extrabold text-white">
                Your Preferences
            </h1>

            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-8 py-6 mt-8 w-1/2">
                <h2 className="text-lg font-medium text-white mb-2">Cleanliness</h2>
                <input type="range" min="0" max="10" value={cleanliness} className="w-full slider" onChange={handleCleanlinessChange} />
                <div className="flex justify-center w-full text-white">
                    <p className="mt-2 value">{cleanliness}</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-8 py-6 mt-8 w-1/2">
                <h2 className="text-lg font-medium text-white mb-2">Social Activity</h2>
                <input type="range" min="0" max="10" value={socialActivity} className="w-full slider" onChange={handleSocialActivityChange} />
                <div className="flex justify-center w-full text-white">
                    <p className="mt-2 value">{socialActivity}</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-8 py-6 mt-8 w-1/2" >
                <h2 className="text-lg font-medium text-white mb-2">Sleep Schedule</h2>
                <input type="range" min="0" max="10" value={sleepSchedule} className="w-full slider" onChange={handleSleepScheduleChange} />
                {sleepLabels}
            </div>

            <div>
                <Link to="/user">
                    <button type="button" class="mt-8 group relative w-full flex justify-center py-3 px-5 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Slider;
