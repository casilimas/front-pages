import MongoDBImage from '/images/mongodb.png';
import nodeUno from '/images/nodejs1.png';
import Mongoose from '/images/mongoose.png';
import ReactViteImage from '/images/react+vite.png';
import '../App.css'; 

const home = () => {
  return (
    <div className="home-container">
      <div className="layout-texto">
       
        <p className="texto-home">
        Durante la creación de esta aplicación, enfrenté numerosos desafíos que se convirtieron en valiosas oportunidades de aprendizaje. Utilicé tecnologías como React con Vite, Node.js, Express y MongoDB. Mi proceso de desarrollo se basó en cursos en línea y en la lectura detallada de la documentación de todas las tecnologías mencionadas. La aplicación se centra en la funcionalidad CRUD (Crear, Leer, Actualizar, Borrar), permitiendo a los usuarios generar usuarios con identificadores únicos que ellos mismos asignan. El backend impone restricciones para proteger la integridad de los datos al crear o modificar usuarios. Su interfaz es altamente intuitiva, facilitando la navegación y el uso. Ofrece herramientas de búsqueda para localizar rápidamente usuarios, opciones para modificarlos, listarlos y borrarlos según las necesidades. Esta combinación de características proporciona una experiencia eficiente y satisfactoria, promoviendo una gestión efectiva de los contenidos. Entre las restricciones, los nombres y apellidos no deben contener símbolos ni números, y no se puede crear un nuevo usuario en lapsos menores de 40 segundos, todo manejado por el backend. Además, una de las restricciones es que el componente listar tiene un token. Por ser una aplicación de demostración, se recomienda no introducir datos reales porque estos datos pueden quedar expuestos ya que estoy publicando el token que desbloquea este componente. El token es     <span className="    token">   jwt_22    </span>
        </p>
        
      
      </div>



      <div className="layout">

        <div className='vite'>
        <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
          <img className="imagen-uno" src={ReactViteImage} alt="React Vite" />
        </a>
        </div>

        <div className='mongo'>
        <a href="https://docs.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <img className="imagen-dos" src={MongoDBImage} alt="MongoDB" />
        </a>
        </div>

        <div className='node'>
        <a href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noopener noreferrer">
          <img className="imagen-tres" src={nodeUno} alt="nodejs" />
        </a>
        </div>

        <div className='mongoose'>
        <a href="https://mongoosejs.com/docs/5.x/docs/guide.html" target="_blank" rel="noopener noreferrer">
          <img className="imagen-cuatro" src={Mongoose} alt="Mongoose" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default home;


/*
L1-4: importar imagenes y css  
L8: definir la funcion home como un componente de react  
L10: return define el jsx que se renderizara  
L11: div con clase home-container para el contenedor principal  
L12: div con clase layout-texto para el contenedor del texto  
L14: p con clase texto-home para el parrafo de texto descriptivo  
L39: span con clase token para resaltar el token jwt  
L44: div con clase layout para el contenedor de las imagenes y enlaces  
L46: div con clase vite para la seccion de vite  
L47: a para el enlace a la documentacion de vite  
L48: img para mostrar la imagen de react vite  
L51: div con clase mongo para la seccion de mongodb  
L52: a para el enlace a la documentacion de mongodb  
L53: img para mostrar la imagen de mongodb  
L56: div con clase node para la seccion de nodejs  
L57: a para el enlace a la documentacion de nodejs  
L58: img para mostrar la imagen de nodejs  
L61: div con clase mongoose para la seccion de mongoose  
L62: a para el enlace a la documentacion de mongoose  
L63: img para mostrar la imagen de mongoose  
L69: exportar el componente home
*/