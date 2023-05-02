import React, { Component } from 'react';
import { TimelineMax } from 'gsap/all';

export default class Trees extends Component{
  constructor(props) {
    super(props);
    this.leaves = null;
    this.line = null;
    this.BendingTL = null;
  }

  componentDidMount() {
    this.BendingTL = new TimelineMax({repeat: -1})
    .set(this.line, { transformOrigin: "bottom"})
    .set(this.leaves, { transformOrigin: "bottom"})
    .to(this.line, 3, { rotation: 4 }, "wind1")
    .to(this.leaves, 3, { rotation: 3, x: 2 }, "wind1")
    .to(this.line, 4, { rotation: 2 }, "wind2")
    .to(this.leaves, 4, { rotation: 1, x: 2 }, "wind2")
    .yoyo(true);
  }
  render() {
    return(
      <svg
        y={ this.props.y }
        x={ this.props.x }
        width={ this.props.width }
        viewBox="0 0 100 185"
      >
        <ellipse
          ref={ leaves => this.leaves = leaves }
          style={{
            transformOrigin: "bottom",
            fill:"#aee28f",
            stroke:"#7ea977",
            strokeMiterlimit:"10",
            strokeWidth:"2px"
          }}
          cx="30"
          cy="73"
          rx="20.58"
          ry="69.23"
        />
        <line
          ref={line => this.line = line}
          style={{
            fill:"none",
            stroke:"#ce4a00",
            strokeMiterlimit:"10",
            strokeWidth:"2px"
          }}
          x1="30"
          x2="30"
          y1="185"
          y2="72"
        />
      </svg>
    )
  }
};
