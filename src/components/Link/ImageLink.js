import React from 'react';

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
export default class ImageLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {link, linkTitle, src, altText} = this.props;
        return (
            <a href={link} title={linkTitle}>
                <img src={src} alt={altText} />
            </a>
        )
    }
}