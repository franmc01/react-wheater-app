import React from 'react'

export const Header = ({titulo}) => {
    return (
        <nav className="nav-wrapper light-blue darken-4">
            <a href="#!" className="brand-logo">{titulo}</a>
        </nav>
    )
}
