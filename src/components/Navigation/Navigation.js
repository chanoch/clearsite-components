import React, { PureComponent } from 'react'

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
class Navigation extends PureComponent {
    render () {
        const {active, menuItems} = this.props;
        return (
            <nav className="navigation__nav">
                {menuItems.map((item) => {
                    var classes = "navigation__link";
                    classes += (item.text === active?" navigation__active":"")
                    return <a key={item.key} className={classes} href={item.link}>{item.linkText}</a>
                })}
            </nav>
        )
    }
}

export default Navigation