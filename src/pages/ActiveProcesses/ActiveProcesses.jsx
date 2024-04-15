import Sidebar from "../../components/Sidebar/Sidebar";
import CardActiveProcess from "../../components/CardActiveProcess/CardActiveProcess";
import axios from "axios";
import { useEffect, useState } from "react";

const ActiveProcesses = () => {
  const [Processes, setProcesses] = useState([]);
  useEffect(() => {
    getProcesses();
  }, []);

  const getProcesses = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/processes");
    setProcesses(res.data);
    return res.data;
  };
  return (
    <div className="content">
      <Sidebar />
      {Processes ? (
        <div className="applications">
          {Processes.map((process) => (
            <CardActiveProcess
              key={process._id}
              date={process.date}
              description={process.description}
              job={process.job}
              skills={process.skills}
              id={process._id}
            />
          ))}
        </div>
      ) : (
        <h2>No hay procesos activos</h2>
      )}
    </div>
  );
};

export default ActiveProcesses;
