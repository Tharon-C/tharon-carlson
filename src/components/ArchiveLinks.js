import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  min-width: 400px;
  display: flex;
  justify-content: space-around;
`

const ArchiveLinks = ({ style }) => {
  return (
    <NavWrapper style={style}>
      <Button large variant="primary" to="/about" >
        Enter Site
      </Button>
    </NavWrapper>
  )
}

export default ArchiveLinks
