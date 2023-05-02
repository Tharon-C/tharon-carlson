import React from 'react'
import { layout } from 'styled-system'
import banner from '../assets/banner.svg'
import mobileBanner from '../assets/mobile-banner.svg'
import styled from 'styled-components'
import Box from './Box';

const BannerWrapper = styled.div`
 position: absolute;
 top: 0;
 width: 100%;
 z-index: -1;
`;
const LandscapeStyle = styled.img`
  ${layout}
  position: absolute;
  bottom: -6vw;
  width: 100%;
`

export default props => (
  <Box height={[ '100px', '150px', '200px']}>
    <BannerWrapper>
      <Box bg="sky.day" height="185px" width="100%"/>
      <LandscapeStyle display={['none', 'none', 'block']} src={banner} />
      <LandscapeStyle display={['block', 'block', 'none']} src={mobileBanner} />
    </BannerWrapper>
  </Box>
)
