import { useCallback, useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [myNumber, setmyMyNumber] = useState(0);
  const [blackColour, setBlackColour] = useState(false);

  console.log("Main Function Re-rendered Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️Ⓜ️");
  
  const style = {
    backgroundColor: blackColour ? "black" : "blue",
    color: blackColour ? "blue" : "black",
  };

  const calculationNumber = useCallback(() => {
    return [myNumber * 10, myNumber * 20, myNumber * 30];
  },[myNumber]);

  return (
    <div style={style}>
      <input
        type="number"
        value={myNumber}
        onChange={(e) => {
          setmyMyNumber(e.target.value);
        }}
      />
      <Table calculationNumber={calculationNumber} />
      <button
        style={{ width: 100, height: 50 }}
        onClick={() => {
          setBlackColour(!blackColour);
        }}
      >
        Toggle
      </button>
      
    </div>
  );
}

export default App;
