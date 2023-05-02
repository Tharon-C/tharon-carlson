import React, { Component, PropTypes } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };

    render() {
        const { size = "100px", style} = this.props
        let styles = {
            sun: {
                width: size, 
                height: size, 
                background: "#fff0a2", 
                borderRadius: 9999,
                ...style,
            },
        };

        return (
            <div style={ styles.sun } />
        );
    }
}
