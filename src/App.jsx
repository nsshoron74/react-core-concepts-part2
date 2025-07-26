import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./friends";
import Posts from "./Posts";
import Players from "./Players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  
  const friendsPromise = fetchFriends();

  const postsPromise = fetchPosts();

  function handleClick() {
    alert("i am clicked");
  }

  return (
    <>
      <h3>React</h3>
      <Players></Players>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> 
      
      <Suspense fallback={<h3>No friends</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h4>Posts are coming</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>
      
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick}>Click me2</button>
      <Counter></Counter>
    </>
  );
}

export default App;
