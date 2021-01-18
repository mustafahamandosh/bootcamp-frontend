import React from 'react';
import { AuthenticationProvider } from './Authentication';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthenticationProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthenticationProvider>
);

export default AppProvider;
