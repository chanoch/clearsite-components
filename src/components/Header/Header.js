import React, { Component } from 'react'

class Header extends Component {
    render () {
        const {title, strapline, leftLink, leftLinkText} = this.props;
        return (
            <header className="header__header">
                <div className="container">
                    <span className="header__strapline order-2 order-md-1">{strapline}</span>
                    <a href="/" className="header__title mr-0 order-1 order-md-2">{title}</a>
                </div>
            </header>
        )
    }
}

export default Header