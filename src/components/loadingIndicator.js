import React from 'react';
import loading from '../logo.svg'

const LoadIndicator = (props) => {
    return <img src={loading} height={props.size} alt="Loading"></img>
}

export default LoadIndicator
