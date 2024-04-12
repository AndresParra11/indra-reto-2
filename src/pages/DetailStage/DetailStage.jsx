import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Stage = {
  id: 1,
  title: "Entrevista 1",
  date: "20 de abril de 2024",
  description:
    "Entrevista a cargo de Mónica Masias, Psicóloga del área de recursos humanos de la empresa Indra. Tener en cuenta que la entrevista tendrá una duración de 30 minutos. Link de la entrevista: https://meet.google.com/abc-123-xyz.",
  documents: [],
};

const DetailStage = () => {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { idStage } = useParams();
  const user = { name: "Andrés Parra", userType: "Reclutado" };

  const handleCommentSubmit = () => {
    // Aquí podrías enviar el comentario a tu API y luego actualizar la lista de comentarios
    const newComment = {
      id: comments.length + 1,
      userName: user.name,
      userType: user.userType, // Puedes obtener el usuario actual de tu sistema de autenticación
      text: comment,
    };
    setComments([...comments, newComment]);
    setComment(""); // Limpiar el campo de comentario después de enviarlo
  };
  return (
    <div className="content">
      <Sidebar />
      <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {Stage.date}
          </Typography>
          <Typography sx={{ mb: 2 }} variant="h5" component="div">
            {Stage.title}
          </Typography>
          <Typography variant="body2">{Stage.description}</Typography>
        </CardContent>
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
