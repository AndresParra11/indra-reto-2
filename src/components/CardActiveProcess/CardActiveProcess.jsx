import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function BasicCard({ date, description, job, stack }) {
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
    </Card>
  );
}

BasicCard.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  job: PropTypes.string,
  stack: PropTypes.array,
};
