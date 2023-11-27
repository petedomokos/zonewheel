import "./App.css";

import Wheel from "./components/wheel/Wheel.js";
import { WheelProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <WheelProvider>
        <Wheel />
      </WheelProvider>
    </div>
  );
}

export default App;
