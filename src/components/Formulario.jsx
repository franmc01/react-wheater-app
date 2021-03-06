import { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        city: '',
        country: ''
    });

    const handleInputChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
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
        </form>
    )
}

Formulario.propTypes = {

}

export default Formulario
