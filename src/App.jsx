import Timer from "./components/Timer";
import { useState } from "react";

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
