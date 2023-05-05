import React from "react";

function Profile() {
    return (
        <div className="bg-gray-900 h-screen">
            <div className="p-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="mb-6">
                                <h2 className="text-xl text-white font-bold mb-2">Name:</h2>
                                <p className="text-white">Random Name</p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-xl text-white font-bold mb-2">Registration Number:</h2>
                                <p className="text-white">21BCE5555</p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-xl text-white font-bold mb-2">Email:</h2>
                                <p className="text-white">random.name@gmail.com</p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-xl text-white font-bold mb-2">Sleep Schedule:</h2>
                                <p className="text-white">Nocturnal</p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-xl text-white font-bold mb-2">Social Activity:</h2>
                                <p className="text-white">
                                    1
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-xl text-white font-bold mb-2">Cleanliness:</h2>
                                <p className="text-white">
                                    1
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="b1.png" alt="Profile" className="rounded-full h-64 mb-2" />
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">Change Profile Picture</button>
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-6">Modify Personal Details</button>
                        <button className="bg-green-700 text-white px-4 py-2 rounded-lg mt-6">Go back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;