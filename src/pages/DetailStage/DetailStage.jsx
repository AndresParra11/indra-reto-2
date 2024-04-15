import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../auth/AuthProvider";

const DetailStage = () => {
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { idProcess, idStage } = useParams();
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

  const handleCommentSubmit = () => {
    // Aquí podrías enviar el comentario a tu API y luego actualizar la lista de comentarios
    const newComment = {
      id: comments.length + 1,
      userName: user.name,
      userType: user.typeProfile, // Puedes obtener el usuario actual de tu sistema de autenticación
      text: comment,
    };
    setComments([...comments, newComment]);
    setComment(""); // Limpiar el campo de comentario después de enviarlo
  };

  return (
    <div className="content">
      <Sidebar />
      <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
        {!process ? (
          <h1>Cargando...</h1>
        ) : (
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {process?.stages?.[idStage] &&
                process.stages[idStage][`dateStage${idStage}`]}
            </Typography>
            <Typography sx={{ mb: 2 }} variant="h5" component="div">
              {process?.stages?.[idStage] &&
                process.stages[idStage][`titleStage${idStage}`]}
            </Typography>
            <Typography variant="body2">
              {process?.stages?.[idStage] &&
                process.stages[idStage][`descriptionStage${idStage}`]}
            </Typography>
          </CardContent>
        )}
      </Card>
      <div className="comments-section">
        <h2>Comentarios</h2>
        {comments.map((c) => (
          <div key={c.id} className="comment">
            <strong>
              {c.userName} ({c.userType}):
            </strong>{" "}
            {c.text}
          </div>
        ))}
        <TextField
          label="Añadir comentario"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <IconButton onClick={handleCommentSubmit}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default DetailStage;
