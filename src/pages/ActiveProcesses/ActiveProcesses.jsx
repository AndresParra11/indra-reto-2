import Sidebar from "../../components/Sidebar/Sidebar";
import CardActiveProcess from "../../components/CardActiveProcess/CardActiveProcess";

const Processes = [
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

const ActiveProcesses = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {Processes.map((process) => (
          <CardActiveProcess
            key={process.id}
            date={process.date}
            description={process.description}
            job={process.job}
            stack={process.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default ActiveProcesses;
