import logo from './logo.svg';
import HomePage from './page/homepage'
import './App.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
          <HomePage/>
        </AuthProvider>
    </div>
  );
}

export default App;
