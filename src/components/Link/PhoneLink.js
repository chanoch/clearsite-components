import React from 'react'
import PropTypes from 'prop-types';

const PhoneLink = ({number}) => {
    const telLink = "tel:"+number;
    return <a href={telLink}>{number}</a>
}

PhoneLink.propTypes = {
        number: PropTypes.string.isRequired,
}

export default PhoneLink;