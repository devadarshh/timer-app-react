// App.jsx
// Root component for the Timer App.
// Manages global state for hours, minutes, and seconds,
// and passes it down to the Timer component for countdown functionality and display.

import Timer from "./components/Timer";
import { useState } from "react";
import "./styles/app.css";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  return (
    <>
      <Timer
        hour={hour}
        setHour={setHour}
        minute={minute}
        setMinute={setMinute}
        second={second}
        setSecond={setSecond}
      />
    </>
  );
}

export default App;
