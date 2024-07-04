import { Routes, Route } from 'react-router-dom';
import Home from '../../src/components/Home';
import Crear from '../../src/components/Crear';
import Buscar from '../../src/components/Buscar';
import Listar from '../../src/components/Listar';
import Editar from '../../src/components/Editar';
import Borrar from '../../src/components/Borrar';
import Navegacion from '../../src/components/NavBar';


const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Home" element={<Home />} />
      <Route path="/Crear" element={<Crear />} />
      <Route path="/Buscar" element={<Buscar />} />
      <Route path="/Listar" element={<Listar />} />
      <Route path="/Editar" element={<Editar />} />
      <Route path="/Borrar" element={<Borrar />} />
      <Route path="/NavBar" element={<Navegacion />} />
    </Routes>
  );
};

export default Rutas;








