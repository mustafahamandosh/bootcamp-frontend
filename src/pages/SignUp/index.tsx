import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = (data: string): void => {
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input type="text" placeholder="Nome" name="name" icon={FiUser} />
          <Input type="email" placeholder="E-mail" name="email" icon={FiMail} />

          <Input
            type="password"
            placeholder="Senha"
            name="password"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="forget">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
