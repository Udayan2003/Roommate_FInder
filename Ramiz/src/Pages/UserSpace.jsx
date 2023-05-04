import React from "react";
import Navbar from "../Components/Navbar";
import MatchCard from "../Components/MatchCard";

function UserSpace(){
    return(
        <>
        <Navbar/>
        <div className="bg-gray-900 h-screen">
            {/* <MatchCard key = {key}/> */}

            <div className="flex flex-wrap justify-center">
                <div className="w-1/2 bg-gray-800 m-4 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-wrap flex-row flex-start">
                        <h1 className="text-2xl text-white font-bold">Aditya</h1> 
                        <button className="ml-auto bg-red-700 text-white px-4 py-2 rounded-lg">More</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-1/2 bg-gray-800 m-4 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-wrap flex-row flex-start">
                        <h1 className="text-2xl text-white font-bold">Heemanshu</h1> 
                        <button className="ml-auto bg-red-700 text-white px-4 py-2 rounded-lg">More</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-1/2 bg-gray-800 m-4 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-wrap flex-row flex-start">
                        <h1 className="text-2xl text-white font-bold">Satvik</h1> 
                        <button className="ml-auto bg-red-700 text-white px-4 py-2 rounded-lg">More</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-1/2 bg-gray-800 m-4 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-wrap flex-row flex-start">
                        <h1 className="text-2xl text-white font-bold">Ramiz</h1>
                        <button className="ml-auto bg-red-700 text-white px-4 py-2 rounded-lg">More</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-1/2 bg-gray-800 m-4 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-wrap flex-row flex-start">
                        <h1 className="text-2xl text-white font-bold">Sankalp</h1>
                        <button className="ml-auto bg-red-700 text-white px-4 py-2 rounded-lg">More</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserSpace;