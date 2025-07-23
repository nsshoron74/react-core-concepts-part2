import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1
    setSixes(updatedSixes)
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h2>Player: BD batsman </h2>
      <p>
        <small>Six: {sixes} </small>
      </p>

{
    runs > 50 && <p>Your score: 50</p>
}

      <h1>Score: {runs} </h1>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
