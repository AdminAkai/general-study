import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarOptionContainer = styled.div`
  margin-left: 16px;
`

export const CustomLink = styled(Link)<{ $isActive: boolean }>`
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid gray;
    transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
  font-size: 16px;
  text-decoration: none;
  color: gray;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.923px;
`
