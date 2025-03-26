import { use } from "react";
export default function Posts(postsPromise) {
  const posts = use(postsPromise);
  console.log(posts);
  return (
    <div className="card">
      <h2>All post are here</h2>
    </div> 
  );
}
