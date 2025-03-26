import Counter from "./Counter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Batsman from "./batsman";
import Users from "./Users";
import Friends from "./friends";
import Posts from "./Posts";

import "./App.css";
import { Suspense } from "react";



const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  return res.json();
};

function App() {
  const postsPromise = fetchFriends();
  // const friendsPromise = fetchFriends();
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

      <Suspense fallback={<h3>Post are Comming</h3>}>
        <Posts postsPromise = {postsPromise} ></Posts>
      </Suspense>

      <Batsman></Batsman>
      {/* <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h2>Hello</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <button onClick='handleClick()'>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={() => alert("click 2")}>Click Me2</button>
    </>
  );
}

export default App;
