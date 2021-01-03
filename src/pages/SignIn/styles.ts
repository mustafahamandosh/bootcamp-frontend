import styled from 'styled-components';
import { shade } from 'polished';
import signinBackgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 40px 0;
    width: 350px;
    text-align: center;

    h1 {
      margin-bottom: 25px;
    }

    input {
      color: #f4ede8;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 15px;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 10px;
      }
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      padding: 15px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 15px;
      border: 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 25px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signinBackgroundImage}) no-repeat center;
  background-size: cover;
`;
