import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CustomLink = styled(Link)<{ $isActive?: boolean; nav?: boolean }>`
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid
      ${({ theme, nav }) => (nav ? theme.primary : theme.Adminis)};
    transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme, nav }) => (nav ? theme.primary : theme.Adminis)};
  text-align: right;
  font-style: normal;
  font-weight: 600;
  line-height: 22.923px;
`

export default CustomLink
