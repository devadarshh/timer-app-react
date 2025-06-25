// Modal.jsx
// This component renders a centered modal dialog for editing the timer values.
// It allows the user to input hours, minutes, and seconds, and validates the input.
// The user can save the changes, reset values, or close the modal.

import "../styles/modal.css";

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
  // Close the modal without saving changes
  function handleClose(event) {
    event.preventDefault();
    setIsModalVisible(false);
  }

  // Save the updated time and close modal
  function handleSaveChanges(event) {
    event.preventDefault();

    // Parse and validate input values
    const h = parseInt(hour);
    const m = parseInt(minute);
    const s = parseInt(second);

    // Input validation for valid time values
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

    // Update state with new values
    setHour(h);
    setMinute(m);
    setSecond(s);

    // Pass new time to parent component (Timer)
    if (typeof onSaveTime === "function") {
      onSaveTime(h, m, s);
    }

    // Close the modal
    setIsModalVisible(false);
  }

  // Reset all input fields to 0
  function handleReset(event) {
    event.preventDefault();
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Timer Settings</h2>

        {/* Input for hours */}
        <div className="input-group">
          <label>Hour</label>
          <input
            type="number"
            min="0"
            value={hour}
            onChange={(e) => setHour(parseInt(e.target.value) || 0)}
          />
        </div>

        {/* Input for minutes */}
        <div className="input-group">
          <label>Minutes</label>
          <input
            type="number"
            min="0"
            max="59"
            value={minute}
            onChange={(e) => setMinute(parseInt(e.target.value) || 0)}
          />
        </div>

        {/* Input for seconds */}
        <div className="input-group">
          <label>Seconds</label>
          <input
            type="number"
            min="0"
            max="59"
            value={second}
            onChange={(e) => setSecond(parseInt(e.target.value) || 0)}
          />
        </div>

        {/* Action buttons: Reset, Close, Save */}
        <div className="modal-buttons">
          <button className="reset-btn" onClick={handleReset}>
            Reset All
          </button>
          <div>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
            <button className="save-btn" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
