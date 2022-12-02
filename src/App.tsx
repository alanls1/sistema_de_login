import { useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './Contexts/Auth/RequireAuth';
import { AuthContext } from './Contexts/Auth/AuthContext';


import './App.css';

function App() {
  const auth = useContext(AuthContext)

  const handleLogout = async () => {
    await auth.signout();
    window.location.reload()
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;