import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function BasicCard({ date, description, job, skills, id }) {
  const maxLength = 260; // Define la longitud máxima de la descripción
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

  // Función para truncar la descripción si es mayor que la longitud máxima
  const truncateDescription = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  // Función para manejar el envío de la invitación
  const handleInvite = async (id) => {
    // Aquí puedes enviar la invitación utilizando el correo ingresado
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/users/process/${inviteEmail}`,
        {
          processes: [id],
        }
      );
      console.log("Candidato invitado:", res.data);
    } catch (error) {
      console.log("Error al enviar la invitación:", error);
    }
    // Luego puedes reiniciar el estado del correo y ocultar el formulario
    setInviteEmail("");
    setShowInviteForm(false);
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
          {skills}
        </Typography>
        <Typography variant="body2">
          {truncateDescription(description, maxLength)}{" "}
          {/* Trunca la descripción */}
        </Typography>
      </CardContent>
      <CardActions>
        {!showInviteForm ? (
          <Button size="medium" onClick={() => setShowInviteForm(true)}>
            Invitar candidato
          </Button>
        ) : (
          <>
            <TextField
              label="Correo electrónico"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              variant="outlined"
              margin="dense"
            />
            <Button size="medium" onClick={() => handleInvite(id)}>
              Enviar invitación
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  job: PropTypes.string,
  skills: PropTypes.string,
  id: PropTypes.string,
};
