import { useState } from 'react';
import axios from 'axios';

const ModificarUsuario = () => {
  const [formData, setFormData] = useState({
    id: '',
    nombres: '',
    apellidos: '',
    correo: '',
    profesion: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/aplicacion/api/buscar`, { params: { id: formData.id } });
      setFormData(response.data);
      setMensaje('');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al buscar el usuario';
      setMensaje(errorMessage);
      setFormData({
        id: '',
        nombres: '',
        apellidos: '',
        correo: '',
        profesion: ''
      });
      setTimeout(() => {
        setMensaje('');
      }, 3000); // El mensaje de error desaparecerá después de 3 segundos
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:3000/aplicacion/api/actualizar', formData);
      setMensaje('Usuario actualizado con éxito');
      setFormData({
        id: '',
        nombres: '',
        apellidos: '',
        correo: '',
        profesion: ''
      });
      setTimeout(() => {
        setMensaje('');
      }, 3000); // El mensaje de éxito desaparecerá después de 3 segundos
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al actualizar el usuario';
      setMensaje(errorMessage);
      setTimeout(() => {
        setMensaje('');
      }, 3000); // El mensaje de error desaparecerá después de 3 segundos
    }
  };

  return (
    <div>
      <div className='titulo-modificar-usuario'>Modificar Usuario</div>
      <div className='formulario-editar'>
      <form onSubmit={handleSearch}>
        <div>
          <label>ID del usuario a buscar:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} required />
        </div>
        
        <button className='boton-buscar-editar' type="submit">Buscar Usuario</button>
        
      </form>
      </div>

      {mensaje && <p>{mensaje}</p>}
      
      {formData.id && (
        <form onSubmit={handleUpdate}>
        <div className='contenedor-formulario'>
        <div className='formulario-edicion'>
  <div>





    <label>Nombres:</label>
    <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} />
  </div>
  <div>
    <label>Apellidos:</label>
    <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
  </div>
  <div>
    <label>Correo:</label>
    <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
  </div>
  <div>
    <label>Profesión:</label>
    <input type="text" name="profesion" value={formData.profesion} onChange={handleChange} />
  </div>
  <button className='actualizar-usuario-editar' type="submit">Actualizar Usuario</button>
</div>
</div>

        </form>
       
        
      )}
    </div>
  );
};

export default ModificarUsuario;


/*
L1: importar useState (React hook)
L2: importar axios para las solicitudes HTTP
L5: useState inicializa el estado formData
L12: useState inicializa el estado mensaje
L14: handleChange actualiza los campos del formulario
L19: handleSearch define la función para buscar usuarios
L20: e.preventDefault evita el comportamiento predeterminado del formulario
L22: axios.get realiza una solicitud GET a la API
L23: setFormData actualiza el estado formData con la respuesta de la API
L24: setMensaje limpia el mensaje
L27: setMensaje establece el mensaje de error
L28: setFormData limpia el estado formData
L29: setTimeout configura un temporizador para limpiar el mensaje
L34: handleUpdate define la función para actualizar usuarios
L35: e.preventDefault evita el comportamiento predeterminado del formulario
L37: axios.put realiza una solicitud PUT a la API
L38: setMensaje establece el mensaje de éxito
L39: setFormData limpia el estado formData
L40: setTimeout configura un temporizador para limpiar el mensaje
L44: setMensaje establece el mensaje de error
L45: setTimeout configura un temporizador para limpiar el mensaje
*/