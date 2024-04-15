import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
export default function BasicCard({
  date,
  description,
  job,
  skills,
  id,
  idUser,
}) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleViewDetail = (idProcess) => {
    if (user.typeProfile === "admin") {
      navigate(`/candidates/${idUser}/${idProcess}`);
    } else {
      navigate(`/applications/${idProcess}`);
    }
  };
  const maxLength = 260; // Define la longitud máxima de la descripción

  // Función para truncar la descripción si es mayor que la longitud máxima
  const truncateDescription = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  return (
    <Card sx={{ minWidth: 275, maxWidth: 450, mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {job}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {skills}
        </Typography>
        <Typography variant="body2">
          {truncateDescription(description, maxLength)}{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleViewDetail(id)}>
          Ver Detalles
        </Button>
        {user.typeProfile === "user " && (
          <Button size="small">Invitar al espacio</Button>
        )}
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  job: PropTypes.string,
  skills: PropTypes.string,
  id: PropTypes.string,
  idUser: PropTypes.string,
};
