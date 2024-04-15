import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardStages from "../../components/CardStages/CardStages";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailApplication = () => {
  const { idUser, idProcess } = useParams();
  const [process, setProcess] = useState([]);

  useEffect(() => {
    getProcess();
  }, []);

  const getProcess = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/processes/${idProcess}`
      );
      setProcess(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {process.stages &&
          process.stages.map((stage, index) => (
            <CardStages
              key={index}
              title={stage[`titleStage${index}`]}
              date={stage[`dateStage${index}`]}
              id={index}
              idProcess={idProcess}
              idUser={idUser}
            />
          ))}
      </div>
    </div>
  );
};

export default DetailApplication;
