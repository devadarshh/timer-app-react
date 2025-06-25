// Timer.jsx
// This component displays a countdown timer with Start, Pause, Reset, and Edit functionality.
// It also shows a modal to let the user set custom time and updates the browser tab title with remaining time.

import Modal from "./Modal";
import { useEffect, useState } from "react";

function Timer({ hour, setHour, minute, setMinute, second, setSecond }) {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Total time remaining in seconds
  const [remainingTime, setRemainingTime] = useState(0);

  // Boolean to check if timer is running
  const [isRunning, setRunning] = useState(false);

  // Convert remaining time (in seconds) to hh:mm:ss format
  const displayHour = Math.floor(remainingTime / 3600);
  const displayMinute = Math.floor((remainingTime % 3600) / 60);
  const displaySecond = remainingTime % 60;

  // Add leading zeros to always show two-digit format
  const paddedHour = String(displayHour).padStart(2, "0");
  const paddedMinute = String(displayMinute).padStart(2, "0");
  const paddedSecond = String(displaySecond).padStart(2, "0");

  // Hook to run timer logic and update title
  useEffect(() => {
    let intervalId;

    // Only run the interval if timer is active and time remains
    if (isRunning && remainingTime > 0) {
      // Update tab title with current time
      document.title = `${formatTime(remainingTime)}`;

      // Start the countdown interval
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId); // Stop the timer at 0
            setRunning(false); // Update state to not running
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [isRunning, remainingTime]);

  // Start button handler: validates and starts timer
  function startTimer(event) {
    event.preventDefault();

    // Validate input values
    if (hour < 0 || minute < 0 || second < 0) {
      console.log("Enter a valid time.");
      return;
    }

    const totalTime = hour * 3600 + minute * 60 + second;
    if (totalTime === 0) {
      console.log("Timer can't start at 0");
      return;
    }

    // Set initial time and start the countdown
    setRemainingTime(totalTime);
    setRunning(true);
  }

  // Pause button handler
  function pauseTimer() {
    setRunning(false);
  }

  // Reset button handler
  function resetTimer() {
    setRunning(false);
    setRemainingTime(0);
  }

  // Toggles the modal visibility
  function handleModal(event) {
    event.preventDefault();
    setIsModalVisible(!isModalVisible);
  }

  // Updates the timer with new values from modal
  function updateRemainingTime(h, m, s) {
    const totalSeconds = h * 3600 + m * 60 + s;
    setRemainingTime(totalSeconds);
  }

  // Helper function to format seconds into hh:mm:ss
  function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  return (
    <div className="timer-container">
      {/* Time display area */}
      <div className="time-display">
        <span>{paddedHour}:</span>
        <span>{paddedMinute}:</span>
        <span>{paddedSecond}</span>
      </div>

      {/* Timer control buttons */}
      <div className="timer-controls">
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}
        <button onClick={resetTimer}>Reset</button>
        <button onClick={handleModal}>Edit</button>
      </div>

      {/* Modal to set hours, minutes, and seconds */}
      {isModalVisible && (
        <Modal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          hour={hour}
          setHour={setHour}
          minute={minute}
          setMinute={setMinute}
          second={second}
          setSecond={setSecond}
          onSaveTime={updateRemainingTime}
        />
      )}
    </div>
  );
}

export default Timer;
