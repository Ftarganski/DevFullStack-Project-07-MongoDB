import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Box, Typography, Grid, Button } from "@mui/material";
import { TextField } from "../components";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { login } from "../services/auth";

const Login = ({ setCurrentRoute }) => {
  const navigate = useNavigate();
  const location = useLocation();
  setCurrentRoute(location.pathname);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={0} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        <Stack direction={"column"}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <img
              style={{
                height: "50px",
                width: "auto",
                padding: "15px 0",
              }}
              src={logo}
              alt="Logo"
            />
            <Typography variant="h6" component="h1" gutterBottom>
              Login
            </Typography>
          </Box>
          <TextField
            id={"email-login"}
            fullWidth={true}
            label={"E-mail"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id={"password-login"}
            fullWidth={true}
            label={"Password"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            size={"large"}
            variant={"contained"}
            onClick={() => {
              login(email, password);
            }}
          >
            Login
          </Button>
          <Button
            size={"large"}
            onClick={() => {
              navigate(`/register`);
            }}
          >
            Register
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
