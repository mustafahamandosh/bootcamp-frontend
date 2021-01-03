import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Background, Container, Content } from './styles';
import Logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="log" />

      <form action="">
        <h1>Faça seu login</h1>

        <input type="email" placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="12">Esqueci minha senha</a>
      </form>

      <a href="forget">
        <FiLogIn />
        Criar Contar
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
