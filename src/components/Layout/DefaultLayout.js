import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Divider from '../Divider/Divider'

/**
 * Creates a general page layout with a header, a navigation section and 
 * a wrapper for the main body of the page.
 * 
 * Any children of this component will be included insite the main body wrapper
 * 
 * It takes a config which contains a site name {config.title} and website {config.strapline} 
 * plus a list of {config.menuItems} and the currently {active} menu item.
 */
const DefaultLayout = ({active, config, children}) => {
    return (
        <div>
            <Header title={config.title} 
                    strapline={config.strapline} />

            <Divider />
            <Navigation active={active} menuItems={config.menuItems}/>
            <Divider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

DefaultLayout.propTypes = {
    config: PropTypes.shape({
        active: PropTypes.string,
        title: PropTypes.string.isRequired,
        strapline: PropTypes.string,
        menuItems: PropTypes.array
    })
}

export default DefaultLayout
