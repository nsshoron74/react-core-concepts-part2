import Counter from "./Counter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Batsman from "./batsman";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>More Concept React</h2>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onClick='handleClick()'>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={() => alert("click 2")}>Click Me2</button>
    </>
  );
}

export default App;
