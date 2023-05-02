import React, { Component, PropTypes } from 'react';

export default class House extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };

    render() {
        let trimColor = "tomato";

        return (
            <svg>
                <rect
                    height="61.99"
                    style={{"fill":"antiquewhite"}}
                    width="127.14"
                    x="62.5"
                    y="115.15"/>
                <polygon
                    style={{ fill: trimColor }}
                    points="205.23 121.14 43.31 121.14 74.85 87.67 174.43 87.67 205.23 121.14"/>

                <g key="window">
                    <rect
                        height="26"
                        style={{
                            fill:"lightcyan",
                            stroke: trimColor,
                            strokeMiterlimit:"10",
                            strokeWidth:"2px"
                        }}
                        width="45.2"
                        x="120.45"
                        y="132"/>
                    <polygon
                        style={{ opacity:"0.03" }}
                        points="120.45 153.94 165.65 130.74 165.65 153.94 120.45 153.94"/>
                    <rect
                        height="28.19"
                        style={{ fill: trimColor}}
                        width="12.37"
                        x="105.68"
                        y="130.74"/>
                    <rect
                        height="28.19"
                        style={{ fill: trimColor}}
                        width="12.37"
                        x="168.24"
                        y="130.74"/>
                </g>
                <rect
                    height="46.4"
                    style={{ fill: trimColor }}
                    width="22.79"
                    x="70.89"
                    y="130.74"/>
                <circle
                    style={{ fill:"gold" }}
                    cx="89.63"
                    cy="153.65"
                    r="2.25"/>
            </svg>
    );
    }
}
