import Sidebar from "../../components/Sidebar/Sidebar";
import CardUser from "../../components/CardUser/CardUser";

const Users = [
  {
    id: 1,
    name: "John Doe",
    email: "jhon@gmail.com",
    cellphone: "123456789",
  },
  {
    id: 2,
    name: "Cristina Parra",
    email: "cristina@gmail.com",
    cellphone: "123456789",
  },
];

const UserByApplication = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {Users.map((user) => (
          <CardUser
            key={user.id}
            name={user.name}
            email={user.email}
            id={user.id}
            cellphone={user.cellphone}
          />
        ))}
      </div>
    </div>
  );
};

export default UserByApplication;
