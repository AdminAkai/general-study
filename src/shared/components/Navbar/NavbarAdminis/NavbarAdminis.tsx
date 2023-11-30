import { FC } from 'react'

import CustomLink from '../../CustomLink'

import { AdminisContainer } from './styledComponents'

const NavbarAdminis: FC = () => (
  <CustomLink to='/' noUnderline nav ariaLabel='home-navbar-link'>
    <AdminisContainer>&lambda;dminis</AdminisContainer>
  </CustomLink>
)

export default NavbarAdminis
