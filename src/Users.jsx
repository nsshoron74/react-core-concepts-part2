import { use } from "react";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  // console.log(users);

  return (
    <div>
      <h1 className="card">Users:</h1>
    </div>
  );
}
