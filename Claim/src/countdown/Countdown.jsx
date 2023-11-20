
import React, { useState, useEffect } from "react";

const DownCounter = ({ stageEnd, init }) => {
  const deadline = stageEnd;
  const calculateTimeRemaining = (deadline) => {
    const currentTime = new Date().getTime();
    const targetTime = new Date(deadline).getTime();
    const timeRemaining = targetTime - currentTime;
    return Math.max(timeRemaining, 0);
  };

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(deadline)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remaining = calculateTimeRemaining(deadline);
      setTimeRemaining(remaining);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    // return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    return (
      <>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex flex-col"> <div>{days < 10 ? "0" + days : days}</div><div>DD</div></div>
          <div className="flex flex-col"> <div>{hours < 10 ? "0" + hours : hours}</div><div>HH</div></div>
          <div className="flex flex-col"> <div>{minutes < 10 ? "0" + minutes : minutes}</div><div>MM</div></div>
          <div className="flex flex-col"> <div>{seconds < 10 ? "0" + seconds : seconds}</div><div>SS</div></div>


        </div>
      </>

    );
  };

  return (
    <div>
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default DownCounter;
