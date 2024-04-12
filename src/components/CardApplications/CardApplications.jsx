import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function BasicCard({
  date,
  description,
  job,
  stack,
  id,
  idUser,
}) {
  const navigate = useNavigate();
  const userType = "admin";
  const handleViewDetail = (id) => {
    if (userType === "admin") {
      navigate(`/candidates/${idUser}/${id}`);
    } else {
      navigate(`/applications/${id}`);
    }
  };
  return (
    <Card sx={{ minWidth: 275, mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {job}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {stack.join(", ")}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleViewDetail(id)}>
          Ver Detalles
        </Button>
        {userType === "admin " && (
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
  stack: PropTypes.array,
  id: PropTypes.number,
  idUser: PropTypes.string,
};
