import "./App.css";
import { CountDown } from "./components/countDown/countDown";
import { useState } from "react";

function App() {
  const [showCountDown, setShowCountDown] = useState(true);

  return (
    <div className="App">
      {showCountDown && (
        <CountDown hideCountDown={() => setShowCountDown(false)} />
      )}
    </div>
  );
}

export default App;
