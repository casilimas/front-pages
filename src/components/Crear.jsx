import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    id: '',
    correo: '',
    profesion: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tiempoContador, settiempoContador] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/aplicacion/api/crear', formData);
      setSuccess('Usuario registrado con éxito');
      setError('');
      settiempoContador(0);  // Resetear el contador en caso de éxito
      // Limpiar las entradas del formulario
      setFormData({
        nombres: '',
        apellidos: '',
        id: '',
        correo: '',
        profesion: ''
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al registrar el usuario';
      if (error.response?.status === 429) { // Si el error es de limitacion de tasa
        settiempoContador(40); // Establecer el contador en 50 segundos
      } else {
        setError(errorMessage);
      }
      setSuccess('');
    }
  };

  // useEffect para manejar el contador descendente
  useEffect(() => {
    let timer;
    if (tiempoContador > 0) {
      timer = setInterval(() => {
        settiempoContador((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [tiempoContador]);

  // useEffect para limpiar los mensajes despues de 3 segundos
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <div className='titulo-crear'>Crear Usuario
      <div className='contenedor-crear'>
        
        <form onSubmit={handleSubmit}>
          <div className='nombres'>
            <label>Nombres:</label>
            <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />
          </div>
          <div className='apellidos'>
            <label>Apellidos:</label>
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
          </div>
          <div className='id'>
            <label>ID:</label>
            <input type="text" name="id" value={formData.id} onChange={handleChange} required />
          </div>
          <div className='correo'>
            <label>Correo:</label>
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
          </div>
          <div className='profesion'>
            <label>Profesión:</label>
            <input type="text" name="profesion" value={formData.profesion} onChange={handleChange} />
          </div>
          <button className='boton' type="submit" disabled={tiempoContador > 0}>
            {tiempoContador > 0 ? `Espere ${tiempoContador} segundos` : 'Registrar'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          {tiempoContador > 0 && (
          <p style={{ color: 'red' }}>Debe esperar {tiempoContador} segundos para registrar un nuevo usuario</p>
        )}
        </form>
      </div>
    </div>
  );
};

export default CreateUser;




/*L17  handleChange: Funcion para manejar cambios en los campos del formulario y actualizar
 el estado formData con los nuevos valores.

handleSubmit: Función asíncrona que se ejecuta al enviar el formulario Intenta enviar
 
L25 los datos del formulario a un endpoint de API usando axios.post. Si tiene éxito,
muestra un mensaje de exito y restablece el formulario. Si fallamuestra un mensaje
de error y, si la respuesta es un error de limitación de tasa (código 429), establece
un contador para evitar mas envios.

L52 useEffect (contador descendente): Maneja un contador descendente para limitar la frecuencia
de los envíos del formulario. Disminuye el contador cada segundo hasta llegar a cero.

L68 useEffect (limpiar mensajes): Limpia los mensajes de éxito y error después de 3 segundos
de mostrarlos.

L79 Renderizado del formulario: Renderiza el formulario con campos de entrada y un botón
de envío. El botón se deshabilita si el contador es mayor a cero. También muestra
mensajes de éxito, error y un mensaje adicional si el contador está activo. */
