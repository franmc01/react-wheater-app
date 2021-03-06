import { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        city: '',
        country: ''
    });

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
        if(busqueda.city.trim() === '' || busqueda.country.trim() === ''){
            setError(true);
            return;
        }

        //Después de la validación
        setError(false);
    }

    return (
        <form onSubmit={handleSubmit}>

            {error && <p className="red darken-3 error">Todos los campos son obligatorios</p> }

            <div className="row">
                <div className="input-field col s12">
                    <input id="ciudad"
                        name="city"
                        type="text"
                        onChange={handleInputChange} />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <select name="country" onChange={handleInputChange}>
                        <option value="" selected> -- Seleccione el pais -- </option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                        <option value="EC">Ecuador</option>
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

Formulario.propTypes = {

}

export default Formulario
