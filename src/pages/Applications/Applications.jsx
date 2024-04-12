import Sidebar from "../../components/Sidebar/Sidebar";
import CardApplications from "../../components/CardApplications/CardApplications";
import "./Applications.scss";
import { useParams } from "react-router-dom";

const Apps = [
  {
    id: 1,
    job: "Desarrollador Full Stack",
    date: "Hace 2 días",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["React, Node.js, MongoDB"],
  },
  {
    id: 2,
    job: "Desarrollador Frontend",
    date: "Hace 3 días",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["React, Node.js, MongoDB"],
  },
  {
    id: 3,
    job: "Desarrollador Backend",
    date: "Hace 4 días",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["React, Node.js, MongoDB"],
  },
];

const Applications = () => {
  const { idUser } = useParams();
  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {Apps.map((app) => (
          <CardApplications
            key={app.id}
            date={app.date}
            description={app.description}
            job={app.job}
            stack={app.stack}
            id={app.id}
            idUser={idUser ? idUser : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Applications;
