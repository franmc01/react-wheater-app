import { Fragment, useState, useEffect } from 'react';
import Clima from './components/Clima';
import Error from './components/Error';
import Formulario from './components/Formulario';
import { Header } from './components/Header';

function App() {

  //Definición de los states
  const [clima, setClima] = useState({});
  const [busqueda, setBusqueda] = useState({ city: '', country: '' });
  const [ejecutar, setEjecutar] = useState(false);
  const [error, setError] = useState(false);

  //Definición del hook effect que ejecuta la consulta de API
  useEffect(() => {

    if (ejecutar) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${busqueda?.city}, ${busqueda?.country}&appid=69053cfab3a1662679ac6884258d78e9`;
      setEjecutar(false);
      consultarAPI(url);
    }
    
  }, [busqueda,ejecutar]);

  //Declaración de la función que realizará la consulta a la API
  const consultarAPI = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    if(data.cod === "404"){
      setError(true);
    }else{
      setClima(data);
      setError(false);
    }
  }

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setEjecutar={setEjecutar} />
            </div>
            <div className="col m6 s12">
              {
                error ? <Error message='No se encontraron resultados' />
                      : <Clima clima={clima} />
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
