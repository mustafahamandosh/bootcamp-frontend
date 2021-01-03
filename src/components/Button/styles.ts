import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
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
`;
