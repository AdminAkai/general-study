import { FC } from 'react'

import CustomLink from '../../CustomLink'

import { LogoContainer } from './styledComponents'

const NavbarLogo: FC = () => (
  <CustomLink to='/' noUnderline nav ariaLabel='home-navbar-link'>
    <LogoContainer>React Interview Study</LogoContainer>
  </CustomLink>
)

export default NavbarLogo
