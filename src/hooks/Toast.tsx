import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Toast from '../components/Toast';

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  message?: string;
}

interface ToastContextProps {
  addToast(messages: Omit<ToastMessage, 'id'>): void;

  removeToast(id: string): void;
}

const ToastContext = createContext({} as ToastContextProps);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, message }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        message,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export { ToastProvider, useToast };
