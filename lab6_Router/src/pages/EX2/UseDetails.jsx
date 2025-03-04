import { useParams } from "react-router-dom";
import { userList } from "../EX1/Home";

const UseDetails = () => {
  const { userId } = useParams();
  const user = userList.find((user) => user.id === parseInt(userId));

  return (
    <div>
      User: {userId}
      <div>name: {user.name}</div>
      <div>Address: {user.Address}</div>
    </div>
  );
};

export default UseDetails;
