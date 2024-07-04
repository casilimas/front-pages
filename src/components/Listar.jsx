import { useState, useEffect } from 'react';
import axios from 'axios';

const Listar = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [isTokenSubmitted, setIsTokenSubmitted] = useState(false);

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    setIsTokenSubmitted(true);
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      const config = {
        method: 'get',
        url: 'http://localhost:3000/aplicacion/api/listar',
        headers: {
          'aut': `Bearer ${token}`
        }
      };

      try {
        const response = await axios(config);
        setUsuarios(response.data);
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error al listar los usuarios';
        setError(errorMessage);
        setTimeout(() => {
          setError('');
        }, 3000); // El mensaje de error desaparecerá después de 3 segundos
      }
    };

    if (isTokenSubmitted) {
      fetchUsuarios();
    }
  }, [isTokenSubmitted, token]);

  return (
    <div className='titulo-listar'>Listar Usuario
    <div className="parent-container">
      <div className="content-wrapper">
        
      
        <div className='formulario-token'>
          <form onSubmit={handleTokenSubmit}>
            <div>
              <label>Ingrese su token:</label>
              <input type="text" value={token} onChange={handleTokenChange} required />
            </div>
            <button type="submit" className='boton'>Enviar Token</button>
          </form>
        </div>
      
        <div className='contenedor-listar'>
          {isTokenSubmitted && (
            <>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className='texto-jason'>
              <ul>
                {usuarios.map(usuario => (
                  <li key={usuario.id}>
                    <pre>{JSON.stringify(usuario, null, 2)}</pre>
                  </li>
                ))}
              </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Listar;


/*
L1-2: importar los hooks useState y useEffect de React y axios para las solicitudes HTTP
L6: useState inicializa el estado usuarios como un array vacío
L7: useState inicializa el estado error como una cadena vacía
L8: useState inicializa el estado token como una cadena vacía
L9: useState inicializa el estado isTokenSubmitted como falso
L11: handleTokenChange actualiza el estado token
L14: handleTokenSubmit evita el comportamiento predeterminado del formulario y establece 
isTokenSubmitted como verdadero
L17: useEffect define la función fetchUsuarios para obtener los usuarios de la API
L18: config define la configuración de la solicitud HTTP con el método GET y los encabezados que 
incluyen el token
L24: axios realiza una solicitud GET a la API
L25: setUsuarios actualiza el estado usuarios con la respuesta de la API
L27: setError establece el mensaje de error si la solicitud falla
L28: setTimeout limpia el mensaje de error después de 3 segundos
L34: useEffect ejecuta fetchUsuarios cuando isTokenSubmitted es verdadero y el token cambia
L37: return define el JSX que se renderizará
L38: div con clase titulo-listar para el título Listar Usuario
L39: div con clase parent-container para el contenedor principal
L40: div con clase content-wrapper para el contenedor de contenido
L44: div con clase formulario-token para el formulario de entrada del token
*/