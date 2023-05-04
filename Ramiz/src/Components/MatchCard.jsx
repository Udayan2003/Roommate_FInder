import React from "react";

function MatchCard({name}) {
    if (!name) return (<>{console.log("Ain't working")}</>);
    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-1/2 bg-gray-800 m-4 rounded-lg shadow-lg">
                <div className="p-4 flex flex-wrap flex-row flex-start">
                    <h1 className="text-2xl text-white font-bold"> { name } </h1>
                    <button className="ml-auto bg-red-700 text-white px-4 py-2 rounded-lg">More</button>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;