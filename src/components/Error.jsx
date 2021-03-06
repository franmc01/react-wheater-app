import React from 'react'
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return (
        <p className="red darken-3 error">{message}</p>
    )
}

Error.prototype = {
    message: PropTypes.string.isRequired
}

export default Error
