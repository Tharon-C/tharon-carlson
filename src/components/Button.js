import styled from 'styled-components';
import { Link } from 'gatsby';


const Button = styled(Link)`
  background: ${({theme}) => theme?.colors.primary};
  color: ${({theme}) => theme?.colors.white};
  border-radius: 9999px;
  font-size: ${({large}) => large ? '24px': '16px'};
  padding: 10px 20px;
  text-decoration: none
  display: inline-block;
  &:hover {
    color: ${({theme}) => theme?.colors.white};
  }
`
export default Button;
