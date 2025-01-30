import React, { useEffect, useState } from 'react';
import fingerPrint1 from '../../../Assests/PreLoad/f1.png'; // relative path from your JSX file
import fingerPrint2 from '../../../Assests/PreLoad/f2.png'; // relative path from your JSX file

const Scanning = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  // Update the loading percentage over time
  useEffect(() => {
    if (loadingPercentage < 100) {
      const timer = setInterval(() => {
        setLoadingPercentage((prev) => {
          if (prev < 100) {
            return prev + 1; // Increase percentage by 1 each time
          }
          return prev;
        });
      }, 10); // Update every 10ms for faster loading

      return () => clearInterval(timer); // Clean up the interval when done
    }
  }, [loadingPercentage]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center relative scan">
        <div
          className="relative w-[200px] h-[250px] bg-cover mt-[00px]" // Reduced size here
          style={{ backgroundImage: `url(${fingerPrint1})` }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover animate-animate"
            style={{ backgroundImage: `url(${fingerPrint2})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-[#3fefef] rounded-lg filter drop-shadow-[0_0_60px_#3fefef] animate-animate-line"></div>
        </div>
        <h3 className="text-2xl text-[#3fefef] mt-10 ml-2 uppercase tracking-widest filter drop-shadow-[0_0_60px_#3fefef] animate-animate-text">
          Loading... {loadingPercentage}%
        </h3>
      </div>
    </div>
  );
};

export default Scanning;
