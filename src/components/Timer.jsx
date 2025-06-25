import Modal from "./Modal";
import { useEffect, useState } from "react";

function Timer({ hour, setHour, minute, setMinute, second, setSecond }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  // Convert remaining time into hh:mm:ss
  const displayHour = Math.floor(remainingTime / 3600);
  const displayMinute = Math.floor((remainingTime % 3600) / 60);
  const displaySecond = remainingTime % 60;

  // Pad with zeros
  const paddedHour = String(displayHour).padStart(2, "0");
  const paddedMinute = String(displayMinute).padStart(2, "0");
  const paddedSecond = String(displaySecond).padStart(2, "0");

  // Timer interval
  useEffect(() => {
    let intervalId;
    if (isRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            setRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, remainingTime]);

  function startTimer(event) {
    event.preventDefault();
    if (hour < 0 || minute < 0 || second < 0) {
      console.log("Enter a valid time.");
      return;
    }

    const totalTime = hour * 3600 + minute * 60 + second;
    if (totalTime === 0) {
      console.log("Timer can't start at 0");
      return;
    }

    setRemainingTime(totalTime);
    setRunning(true);
  }

  function pauseTimer() {
    setRunning(false);
  }

  function resetTimer() {
    setRunning(false);
    setRemainingTime(0);
  }

  function handleModal(event) {
    event.preventDefault();
    setIsModalVisible(!isModalVisible);
  }

  function updateRemainingTime(h, m, s) {
    const totalSeconds = h * 3600 + m * 60 + s;
    setRemainingTime(totalSeconds);
  }

  return (
    <div>
      <div>
        <span>{paddedHour}:</span>
        <span>{paddedMinute}:</span>
        <span>{paddedSecond}</span>
      </div>

      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}

      <button onClick={resetTimer}>Reset</button>
      <button onClick={handleModal}>Edit</button>

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
