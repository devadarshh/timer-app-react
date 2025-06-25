import React from "react";

const Modal = ({
  setIsModalVisible,
  hour,
  setHour,
  minute,
  setMinute,
  second,
  setSecond,
  onSaveTime,
}) => {
  function handleClose(event) {
    event.preventDefault();
    setIsModalVisible(false);
  }

  function handleSaveChanges(event) {
    event.preventDefault();

    const h = parseInt(hour);
    const m = parseInt(minute);
    const s = parseInt(second);

    if (
      isNaN(h) ||
      isNaN(m) ||
      isNaN(s) ||
      h < 0 ||
      m < 0 ||
      m >= 60 ||
      s < 0 ||
      s >= 60
    ) {
      alert("Please enter valid time values.");
      return;
    }

    setHour(h);
    setMinute(m);
    setSecond(s);

    if (typeof onSaveTime === "function") {
      onSaveTime(h, m, s); // ✅ UPDATE SCREEN DISPLAY TIME
    }

    setIsModalVisible(false);
  }

  function handleReset(event) {
    event.preventDefault();
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  return (
    <div>
      <label>
        Hour
        <input
          type="number"
          min="0"
          value={hour}
          onChange={(e) => setHour(parseInt(e.target.value) || 0)}
        />
      </label>
      <label>
        Minutes
        <input
          type="number"
          min="0"
          max="59"
          value={minute}
          onChange={(e) => setMinute(parseInt(e.target.value) || 0)}
        />
      </label>
      <label>
        Seconds
        <input
          type="number"
          min="0"
          max="59"
          value={second}
          onChange={(e) => setSecond(parseInt(e.target.value) || 0)}
        />
      </label>

      <br />
      <br />
      <button onClick={handleClose}>Close</button>
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={handleReset}>Reset All</button>
    </div>
  );
};

export default Modal;
