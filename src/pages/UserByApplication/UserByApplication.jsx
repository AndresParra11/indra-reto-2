import Sidebar from "../../components/Sidebar/Sidebar";
import CardUser from "../../components/CardUser/CardUser";
import { useEffect, useState } from "react";
import axios from "axios";

const UserByApplication = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/users");
      if (
        res.data.some((user) => user.processes && user.processes.length > 0)
      ) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {Users.map((user) => (
          <CardUser
            key={user._id}
            name={user.name}
            email={user.email}
            id={user._id}
            cellphone={user.cellphone}
          />
        ))}
      </div>
    </div>
  );
};

export default UserByApplication;
