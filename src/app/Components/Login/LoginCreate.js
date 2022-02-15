import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import guy from "../../../img/guy.png";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../Hooks/useForm";

const LoginCreate = () => {
  const nome = useForm();
  const email = useForm();
  const usuario = useForm();
  const senha = useForm();
  const confirmarSenha = useForm();
  const idEmpresa = useForm();

  function handleSubmit(event) {
    // event.preventDetault();
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
              <Link to="/login">
                <Button style={{ marginRight: "2em" }}>Login</Button>
              </Link>
              <Button disabled>Cadastrar</Button>
            </Box>
            <Box>
              <form
                style={{ marginTop: "2em" }}
                action=""
                onSubmit={handleSubmit}
              >
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Email" type="text" name="email" {...email} />
                <Input
                  label="Nome de usuário"
                  type="text"
                  name="nomeUsuario"
                  {...usuario}
                />
                <Box sx={{ display: "flex" }}>
                  <div style={{ marginRight: "2em" }}>
                    <Input label="Senha" type="text" name="senha" {...senha} />
                  </div>
                  <Input
                    label="Confirmar senha"
                    type="text"
                    name="confSenha"
                    {...confirmarSenha}
                  />
                </Box>
                <Input
                  label="Id da empresa"
                  type="text"
                  name="idEmpresa"
                  {...idEmpresa}
                />
              </form>
              <Box sx={{ display: "flex" }}>
                <Link
                  style={{ marginTop: "2em", marginLeft: "290px" }}
                  to="/login"
                >
                  <Button>Criar conta</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default LoginCreate;
