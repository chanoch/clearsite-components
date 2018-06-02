import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders an image with a surrounding hyperlink
 * 
 * Styles used are:
 * 
 * a {
 * }
 * 
 * img {
 * }
 * 
 * This will output the following block:
 * 
 *  <a href={link} title={linkTitle}>
        <img src={src} alt={altText} />
    </a>
 */
const ImageLink = ({link, linkTitle, src, altText}) => {
    return (
        <a href={link} title={linkTitle}>
            <img src={src} alt={altText} />
        </a>
    )
}

ImageLink.propTypes = {
    link: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
}

export default ImageLink;