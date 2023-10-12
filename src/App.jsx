import logo from './logo.svg';
import FormFirebase from './page/formulario';
import './App.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
          <h1>proyecto</h1>
          <FormFirebase/>
        </AuthProvider>
    </div>
  );
}

export default App;
