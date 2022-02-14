import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <Button>Login</Button>
      <Link to="/register">
        <Button>Cadastrar</Button>
      </Link>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/passwordForgotten">Perdeu a Senha</Link>
      <Link to="/recoverPassword">Recuperar Senha</Link>
    </section>
  );
};

export default LoginForm;
