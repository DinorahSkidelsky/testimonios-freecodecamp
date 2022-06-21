import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Me apasiona aprender nuevas tecnologías y herramientas del desarrollo web. Siempre aprendiendo nuevas tecnologías." />
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Estudiar JavaScript y React me ha encantado. Siempre he querido ser Frontend Developer." />
        <Testimonio
          nombre="Sarah Loris"
          pais="Madrid"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="Gracias a FreeCodeCamp he aprendido más de lo que he imaginado. Soy una Ingeniera de Software y seguiré aprendiendo." />
      </div>
    </div>
  );
}

export default App;
