import { useState, useEffect } from 'react';
import axios from 'axios';

const BuscarUsuario = () => {
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
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al buscar el usuario';
      setMensaje(errorMessage);
      setUser(null);
      setTimeout(() => {
        setMensaje('');
      }, 3000); // El mensaje de error desaparecerá después de 3 segundos
    }
  };

  useEffect(() => {
    if (mensaje) {
      const tiempo = setTimeout(() => {
        setMensaje('');
      }, 3000); // El mensaje desaparecerá después de 3 segundos
      return () => clearTimeout(tiempo); // Limpiar el temporizador si el componente se desmonta o el mensaje cambia
    }
  }, [mensaje]);

  return (
    <div>
     <div className='titulo-buscar'>Buscar Usuario</div>
    <div className='container-buscar'>
     
      <div className='formulario_buscar'>
      <form onSubmit={handleSearch}>
        <div>
          <label>ID del usuario a buscar:</label>
          <input type="text" value={id} onChange={handleIdChange} required />
        </div>
        
        <button className='boton-buscar-en-buscar' type="submit">Buscar Usuario</button>
       
      </form>
      </div>
      <div className='mensaje-backend'>
      {mensaje && <p>{mensaje}</p>}
      </div>
      {user && (
        <div className='texto-jason-buscar'>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
    </div>
  );
};

export default BuscarUsuario;



/*
L1-2: importar useState y useEffect (React hooks)
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
L27: setTimeout configura un temporizador para limpiar el mensaje
L31: useEffect limpia el mensaje después de 3 segundos
L32: setTimeout configura un temporizador para limpiar el mensaje
L33: clearTimeout limpia el temporizador
*/