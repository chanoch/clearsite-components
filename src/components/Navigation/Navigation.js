import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/** 
 * Create a list of menu items from the menuItems prop. 
 * 
 * The "active" prop identifies which page the user is currently at.
 * 
 * Will output:
 * 
    <nav className="navigation__nav">
        <a class="navigation__link navigation__active" href={item.link}>{item.linkText}</a>
        <a class="navigation__link" href={item.link}>{item.linkText}</a>
        <a class="navigation__link" href={item.link}>{item.linkText}</a>
    </nav>
 */

const Navigation = ({active, menuItems}) => {
    return (
        <nav className="navigation__nav">
            {menuItems.map(item => {
                console.log(item)
                var classes = "navigation__link"
                classes += (item.key === active?" navigation__active":"")
                return <NavItem key={item.key} classes={classes} link={item.link} linkText={item.linkText} />
            })}
        </nav>

    )
}

Navigation.propTypes = {
    menuItems: PropTypes.arrayOf({item: PropTypes.string}),
}

export default Navigation

const NavItem = ({classes, link, linkText}) => {
    return <a className={classes} href={link}>{linkText}</a>
}
NavItem.propTypes = {
        classes: PropTypes.string, 
        link: PropTypes.string.isRequired, 
        linkText: PropTypes.string.isRequired,
}
