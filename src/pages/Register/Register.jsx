import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const auth = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, birthday, cellphone } =
      event.target.elements;
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users", {
        name: name.value,
        email: email.value,
        password: password.value,
        birthday: birthday.value,
        cellphone: cellphone.value,
        userType: "user",
      });

      // Establecer la información de autenticación
      auth.saveUser(res.data._id);

      // Redirigir al usuario a la página de perfil
      navigate("/profile");
    } catch (error) {
      // Manejar errores si ocurre algún problema durante el registro
      console.error("Error al registrar al usuario:", error);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordsMatch(confirmPasswordValue === password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre completo"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="cellphone"
              label="Número de celular"
              name="cellphone"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Repite tu contraseña"
              type="password"
              id="password2"
              error={!passwordsMatch}
              helperText={!passwordsMatch && "Las contraseñas no coinciden"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="birthday"
              label="Fecha de nacimiento"
              InputLabelProps={{ shrink: true }}
              type="date"
              id="birthday"
            />
            {passwordsMatch && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Regístrate
              </Button>
            )}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidó su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Tienes una cuenta? Inicia sesión"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
