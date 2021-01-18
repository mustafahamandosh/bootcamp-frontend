import React from 'react';

import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/Toast';
import { Container } from './styles';
import ToastContent from './ToastContent';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <ToastContent key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default Toast;
