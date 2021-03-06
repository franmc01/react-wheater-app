import { useState } from 'react';
import Error from './Error';
// import PropTypes from 'prop-types'

const Formulario = ({busqueda, setBusqueda, setEjecutar}) => {

    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación
        if (busqueda.city.trim() === '' || busqueda.country.trim() === '') {
            setError(true);
            return;
        }

        //Después de la validación
        setError(false);
        setEjecutar(true);
    }

    return (
        <form onSubmit={handleSubmit}>

            {error && <Error message='Debe completar todos los campos' />}

            <div className="row">
                <div className="input-field col s12">
                    <input id="ciudad"
                        name="city"
                        type="text"
                        value={busqueda.city}
                        onChange={handleInputChange} />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <select name="country" id="country" value={busqueda.country} onChange={handleInputChange}>
                        <option value=""> -- Seleccione el pais -- </option>
                        <option value="EC">Ecuador</option>
                        <option value="CO">Colombia</option>
                        <option value="AR">Argentina</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label>Pais: </label>
                </div>
            </div>
            <div className="input-field col s12">
                <button type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4">
                    Busca clima
                </button>
            </div>
        </form>
    )
}

// Formulario.propTypes = {

// }

export default Formulario
