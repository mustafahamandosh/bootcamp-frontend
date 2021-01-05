import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Background, Container, Content } from './styles';
import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="log" />

      <form action="">
        <h1>Faça seu login</h1>

        <Input type="email" placeholder="E-mail" name="email" icon={FiMail} />

        <Input
          type="password"
          placeholder="Senha"
          name="password"
          icon={FiLock}
        />

        <Button type="submit">Entrar</Button>

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
