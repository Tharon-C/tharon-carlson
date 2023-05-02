import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineMax, Power0 } from "gsap";
import clouds from '../../images/Clouds.svg';

const Wrapper = styled.div({
    overflow: 'hidden',
    width: '100%'
});

const CloudImg = styled.img({
  width: '200%'
});

const Overlay = styled.div`
  background: linear-gradient(to right, rgba(209,242,254,1) 0%,rgba(209,242,254,0) 20%,rgba(209,242,254,0) 85%,rgba(209,242,254,1) 100%);
  position: absolute;
  hight: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
`;

class Clouds extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.clouds = null;
    this.wrapper = null;
    // reference to the animation
    this.tween = null;
  }
  componentDidMount() {
    const width = this.wrapper.offsetWidth;
    this.tween = new TimelineMax({repeat: -1})
    .fromTo(
      this.clouds, 50,
      { x: - width, ease: Power0.easeNone },
      { x: 0, ease: Power0.easeNone })
    .play();
  }
  render() {
    return (
      <Wrapper {...this.props} ref={wrapper => this.wrapper = wrapper}>
        <CloudImg ref={clouds => this.clouds = clouds} src={clouds} />
        <Overlay />
      </Wrapper>
    )
  }
}

export default Clouds
