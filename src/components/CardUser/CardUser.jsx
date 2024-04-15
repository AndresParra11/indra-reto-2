import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function BasicCard({ name, cellphone, id, email }) {
  const navigate = useNavigate();

  const handleViewDetailStage = (id) => {
    navigate(`/candidates/${id}`);
  };
  return (
    <Card sx={{ minWidth: 275, mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {email}
        </Typography>
        <Typography variant="h5" component="div">
          {cellphone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleViewDetailStage(id)}>
          Ver proceso
        </Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  name: PropTypes.string,
  cellphone: PropTypes.string,
  id: PropTypes.string,
  email: PropTypes.string,
};
