import { useState, useEffect } from 'react';
import axios from 'axios';

const BuscarYBorrarUsuario = () => {
  const [id, setId] = useState('');
  const [user, setUser] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/aplicacion/api/buscar`, { params: { id } });
      setUser(response.data);
      setMensaje('');
      // No limpiar el ID despues de buscar
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al buscar el usuario';
      setMensaje(errorMessage);
      setUser(null);
      // Mantener el ID en el campo de entrada si ocurre un error
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:3000/aplicacion/api/borrar', { data: { id: user.id } });
      setMensaje(response.data.message);
      setUser(null);
      setId(''); // Limpiar el ID después de borrar el usuario
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al borrar el usuario';
      setMensaje(errorMessage);
      setTimeout(() => {
        setMensaje('');
      }, 3000); // El mensaje de error desaparecerá después de 3 segundos
    }
  };

  useEffect(() => {
    if (mensaje) {
      const tiempo = setTimeout(() => {
        setMensaje('');
      }, 3000); // el mensaje desaparecera despues dependiendo del backet tambien tiene restriicion de 3 segundos
      return () => clearTimeout(tiempo); // Limpiar el temporizador si el componente se desmonta o el mensaje cambia
    }
  }, [mensaje]);

  return (
    <div>
      <div className='titulo-borrar'>Borrar Usuario</div>
      
      
      <form onSubmit={handleSearch}>
        <div>
          <label>ID del usuario a buscar:</label>
          <input type="text" value={id} onChange={handleIdChange} required />
        </div>
        <button className="boton-buscae-borrar" type="submit">Buscar Usuario</button>
      </form>

      {mensaje && <p className="mensaje-usuario">{mensaje}</p>}

      
      {user && (
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <form onSubmit={handleDelete}>
          <button className="boton-borrar" type="submit">Borrar Usuario</button>
          
          </form>
          
          
        </div>
        
      )}

      
    </div>
    
  );
};

export default BuscarYBorrarUsuario;


/*
L1-2: importar useState y useEffect 
L7: useState inicializa el estado id
L9: useState inicializa el estado user
L11: useState inicializa el estado mensaje
L14: setId actualiza el estado id
L19: e.preventDefault evita el comportamiento predeterminado del formulario
L21: axios.get realiza una solicitud GET a la API
L23: setUser actualiza el estado user
L24: setMensaje limpia el mensaje
L25: setMensaje establece el mensaje de error
L26: setUser limpia el estado user
L30: e.preventDefault evita el comportamiento predeterminado del formulario
L32: axios.delete realiza una solicitud DELETE a la API
L34: setMensaje actualiza el mensaje con la respuesta de la API
L35: setUser limpia el estado user
L35: setId limpia el estado id
L36: setMensaje establece el mensaje de error
L37: setTimeout configura un temporizador para limpiar el mensaje
L39: useEffect limpia el mensaje después de 3 segundos
L40: setTimeout configura un temporizador para limpiar el mensaje
L44: clearTimeout limpia el temporizador
*/