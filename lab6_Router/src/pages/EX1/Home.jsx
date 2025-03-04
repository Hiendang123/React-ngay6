import UseDetails from "../EX2/UseDetails";
import { Link } from "react-router-dom";

export const userList = [
  { id: 1, name: "John Doe 1", Address: "Canada" },
  { id: 2, name: "John Doe 2", Address: "Brazil" },
  { id: 3, name: "John Doe 3", Address: "Japan" },
];

export default function Home() {
  return (
    <>
      <h1 className="mt-20 text-5xl">Home Pages</h1>
      <h2 className="mt-20 text-5xl">List User: </h2>

      <ul className="mt-8 text-2xl">
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`} className="text-blue-500">
              {user.name}
              {user.Address}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
