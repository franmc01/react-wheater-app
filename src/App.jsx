import { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import { Header } from './components/Header';

function App() {

  const [clima, setClima] = useState({});
  const [busqueda, setBusqueda] = useState({ city: '', country: '' });
  const [ejecutar, setEjecutar] = useState(false);

  useEffect(() => {

    if (ejecutar) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${busqueda?.city}, ${busqueda?.country}&appid=69053cfab3a1662679ac6884258d78e9`;
      consultarAPI(url);
    }

  }, [ejecutar]);

  const consultarAPI = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setClima(data);
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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
