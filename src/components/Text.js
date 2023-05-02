import styled from 'styled-components'
import { space, typography, color } from 'styled-system'

const Text = styled.p`
  ${typography}
  ${color}
  ${space}
`
export const P = styled(Text)`
  line-height: 1.7;
`

export default Text
