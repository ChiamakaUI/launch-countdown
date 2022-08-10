// import FlipClock from "x-react-flipclock";
import React, { useState, useEffect } from "react";
import "./App.css";
// import Flip from "./Components/Flip";
import facebook from './Components/Images/icon-facebook.svg'
import instagram from './Components/Images/icon-instagram.svg'
import pinterest from './Components/Images/icon-pinterest.svg'

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-8-27") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;

  };

  useEffect(() =>{
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const {days, hours,minutes,seconds } = timeLeft
  return ( 
    <div className="launch">
      {/* <FlipClock type="clock" /> */}
      {/* {console.log(timeLeft)} */}
      <h1>We're launching soon</h1>
      {/* <Flip value={0} /> */}
      <div className="launch-timer">
      <div className="timer-container">
        <div className="timer">
          <h3>{days < 10 ? `0${days}` : days}</h3>
        </div>
        <p>days</p>
      </div>
      <div className="timer-container">
        <div className="timer">
          <h3>{hours < 10 ? `0${hours}` : hours }</h3>
        </div>
        <p>hours</p>
      </div>
      <div className="timer-container">
        <div className="timer">
          <h3>{minutes < 10 ? `0${minutes}` : minutes}</h3>
        </div>
        <p>minutes</p>
      </div>
      <div className="timer-container">
        <div className="timer">
          <h3>{seconds < 10 ? `0${seconds}` : seconds}</h3>
        </div>
        <p>seconds</p>
      </div>
      </div>
      <div className="socials">
        <div className="social-icons">
          <img src={facebook} alt="facebook"/>
          <img src={instagram} alt="instagram"/>
          <img src={pinterest} alt="pinterest"/>

        </div>

      </div>
    
    </div>
  );
}

export default App;
