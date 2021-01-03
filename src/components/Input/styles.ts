import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ffffff;

    &::placeholder {
      color: #666360;
    }
  }

  & + div {
    margin-top: 10px;
  }

  svg {
    margin-right: 16px;
  }
`;
