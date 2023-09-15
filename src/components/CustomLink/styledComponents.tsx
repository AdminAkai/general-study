import { Link } from 'react-router-dom'

import styled from 'styled-components'

export interface ICustomATagProps {
  $isActive?: boolean
  $nav?: boolean
}

export const CustomATag = styled(Link)<ICustomATagProps>`
  &:after {
    display: block;
    content: '';
    border-bottom: 0.13rem solid
      ${({ theme, $nav }) => ($nav ? theme.primary : theme.Adminis)};
    transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  font-size: 1.5rem;
  text-decoration: none;
  user-select: none;
  color: ${({ theme, $nav }) => ($nav ? theme.primary : theme.Adminis)};
  text-align: right;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4375rem;
`
