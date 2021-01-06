import React, { useCallback } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: Record<string, never>) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatória'),
        email: Yup.string()
          .required('E-mail obrigatória')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'No mínimo 8 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

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
