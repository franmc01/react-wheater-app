import React from 'react'
import PropTypes from 'prop-types'


const Clima = ({ clima }) => {

    const { main, name } = clima;

    if(name==null) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp -273.15).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima: 
                    {parseFloat(main.temp_max -273.15).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Mínima: 
                    {parseFloat(main.temp_min -273.15).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}

Clima.prototype = {
    clima: PropTypes.object.isRequired
}

export default Clima
