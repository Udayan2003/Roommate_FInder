import React from "react";
import Navbar from "../Components/Navbar";
import MatchCard from "../Components/MatchCard";
import TopMatches from "../data/TopMatchData.json";

function UserSpace(){
    return(
        <>
        <Navbar/>
        <div className="bg-gray-900 h-screen">
            {Object.entries(TopMatches)[0][1].map((match, key) => {return <MatchCard key={key} name={match.name}/>})}
        </div>
        </>
    )
}

export default UserSpace;