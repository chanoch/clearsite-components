import React from 'react'
import PropTypes from 'prop-types';

function Header({title, strapline}) {
    return (
        <header className="header__header">
            <div className="container">
                <span className="header__strapline order-2 order-md-1">{strapline}</span>
                <a href="/" className="header__title mr-0 order-1 order-md-2">{title}</a>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    strapline: PropTypes.string,
}

export default Header