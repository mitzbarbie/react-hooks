import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const plusItem = () => setValue(value + 1);
  const minusItem = () => setValue(value - 1);

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={plusItem}>plus</button>
      <button onClick={minusItem}>minus</button>
    </div>
  );
}

export default App;
