import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import { AuthenticationProvider } from './hooks/Authentication';

const App: React.FC = () => (
  <>
    <AuthenticationProvider>
      <SignIn />
    </AuthenticationProvider>
    <GlobalStyle />
  </>
);

export default App;
