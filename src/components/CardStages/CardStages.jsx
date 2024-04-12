import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function BasicCard({ title, date, id, idProcess, idUser }) {
  const navigate = useNavigate();
  const userType = "admin";
  const handleViewDetailStage = (id) => {
    if (userType === "admin") {
      navigate(`/candidates/${idUser}/${idProcess}/${id}`);
    } else {
      navigate(`/applications/${idProcess}/${id}`);
    }
  };
  return (
    <Card sx={{ minWidth: 275, mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleViewDetailStage(id)}>
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  idProcess: PropTypes.string,
  id: PropTypes.number,
  idUser: PropTypes.string,
};
