import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/index';
import { GlobalStyles } from './styles/global.js';
import { AuthProvider } from './routes/authContext';

function App() {
  return (
    <>
    <AuthProvider>
    <GlobalStyles />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    </AuthProvider>
    </>
    
  )
}

export default App;
