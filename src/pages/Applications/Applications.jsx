import Sidebar from "../../components/Sidebar/Sidebar";
import CardApplications from "../../components/CardApplications/CardApplications";
import "./Applications.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../auth/AuthProvider";
import Button from "@mui/material/Button";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Applications = () => {
  const auth = useAuth();
  const { idUser } = useParams();
  const [user, setUser] = useState({});
  const [userProcesses, setUserProcesses] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (idUser) {
      getUser();
      getProcesses();
    } else {
      setUserProcesses(auth.user.processes);
      getProcesses();
      setLoading(false);
    }
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/users/${idUser}`);
      setUser(res.data);
      setUserProcesses(res.data.processes);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getProcesses = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/processes");
      setProcesses(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (!userProcesses) {
    return (
      <div className="content">
        <Sidebar />
        <h1>No hay procesos asociados a este usuario</h1>
      </div>
    );
  }

  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {loading ? (
          <p>Loading...</p>
        ) : (
          userProcesses.map((processId) => {
            // Filtra los procesos que coincidan con los procesos asociados al usuario
            const process = processes.find(
              (process) => process._id === processId
            );
            if (process) {
              return (
                <CardApplications
                  key={process._id}
                  date={process.date}
                  description={process.description}
                  job={process.job}
                  skills={process.skills}
                  id={process._id}
                  idUser={idUser ? idUser : null}
                />
              );
            }
            return null;
          })
        )}
        {auth.user.typeProfile === "admin" && (
          <Link to="/candidates">
            <Button title="Atrás">
              <FontAwesomeIcon icon={faBackwardStep} className="me-2" /> Atrás
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Applications;
