import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({titulo}) => {
    return (
        <nav className="nav-wrapper light-blue darken-4">
            <a href="#!" className="brand-logo">{titulo}</a>
        </nav>
    )
}

Header.prototype = {
    titulo: PropTypes.string.isRequired
}
