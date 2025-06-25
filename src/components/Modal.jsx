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
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Timer Settings</h2>

        <div className="input-group">
          <label>Hour</label>
          <input
            type="number"
            min="0"
            value={hour}
            onChange={(e) => setHour(parseInt(e.target.value) || 0)}
          />
        </div>

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
