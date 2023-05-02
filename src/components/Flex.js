import styled from 'styled-components'
import { flexbox, layout, space } from 'styled-system'

const Flex = styled.div`
  ${({center}) => center && `
    margin-right: auto;
    margin-left: auto;
  `}
  ${({flex}) => flex && `display: flex;`}
  ${flexbox}
  ${layout}
  ${space}
`
Flex.defaultProps = { display: 'flex' }
export default Flex
