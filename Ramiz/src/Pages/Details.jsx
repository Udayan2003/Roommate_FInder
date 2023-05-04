
import React, { useState } from 'react';


function App() {
  const [cleanliness, setCleanliness] = useState(0);
  const [sleepSchedule, setSleepSchedule] = useState(0);

  const handleCleanlinessChange = (e) => {
    setCleanliness(e.target.value);
  }

  const handleSleepScheduleChange = (e) => {
    setSleepSchedule(e.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
        Welcome to my Website
      </h1>

      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-8 py-6 mt-8 w-1/2">
        <h2 className="text-lg font-medium text-white mb-2">Cleanliness</h2>
        <input type="range" min="0" max="10" value={cleanliness} className="w-full" onChange={handleCleanlinessChange} />
        <div className="flex justify-between w-full text-white">
        <p className="mt-2"> Value: {cleanliness}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-8 py-6 mt-8 w-1/2" >
        <h2 className="text-lg font-medium text-white mb-2">Sleep Schedule</h2>
        <input type="range" min="0" max="10" value={sleepSchedule} className="w-full" onChange={handleSleepScheduleChange} />
        <div className="flex justify-between w-full text-white ">
          
          <p className='text-center '>Diurnal Sleep at 12 AM Nocturnal</p> 
          <div>
            </div>         
        </div>
      </div>
    </div>
  );
}

export default App;


// function Details(props) {
//   return (
//     <div>
//         <h1>DetailS</h1>
//     </div>)
// }