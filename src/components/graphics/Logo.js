import React from 'react';
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import LogoBlue from "../../images/logo-blue.svg"

const Logo = styled.img`
  ${layout}
  ${space}
`;

export default props => (
  <Logo {...props} alt="Tharon Carlson" src={LogoBlue} />
)
