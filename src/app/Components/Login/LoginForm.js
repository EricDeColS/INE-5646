import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import guy from "../../../img/guy.png";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const navigate = useNavigate();

  function handleSubmit(event) {
    // event.preventDetault();

    if (username.validate() && password.validate()) {
      navigate("/ponto");
    }
  }

  return (
    <section className="animeLeft">
      <Box style={{ marginTop: "181px" }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={1}></Grid>
          <Grid item lg={5}>
            <img src={guy} alt="guy"></img>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex" }}>
              <Button style={{ marginRight: "2em" }} disabled>
                Login
              </Button>
              <Link to="/register">
                <Button>Cadastrar</Button>
              </Link>
            </Box>

            <form
              style={{ marginTop: "2em" }}
              action=""
              onSubmit={handleSubmit}
            >
              <Input
                label="Usuário"
                type="text"
                name="username"
                {...username}
              />
              <Input
                label="Senha"
                type="password"
                name="password"
                {...password}
              />
              <Button>Entrar</Button>
            </form>
            <Box style={{ marginTop: "2em" }} sx={{ display: "flex" }}>
              <Link style={{ marginRight: "2em" }} to="/passwordForgotten">
                Perdeu a Senha
              </Link>
              <Link to="/recoverPassword">Recuperar Senha</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default LoginForm;
