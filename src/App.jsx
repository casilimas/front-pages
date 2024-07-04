import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/NavBar';
import Rutas from '../src/routes/rutas';
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Rutas />
      </div>
    </Router>
  );
}

export default App;
