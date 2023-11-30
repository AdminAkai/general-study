import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'
import IconRenderer from 'src/shared/components/IconRenderer'

import NavbarOption from './NavbarOption'

import { allNavbarOptions } from './lib'
import { NavbarContainer, NavbarOptions, NavbarTitle } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <CustomLink to='/' nav ariaLabel='home-navbar-link'>
        <NavbarTitle>&lambda;dminis</NavbarTitle>
      </CustomLink>
      <NavbarOptions>
        <IconRenderer />
        {allNavbarOptions.map((option, i) => (
          <NavbarOption
            {...option}
            key={`${i}-${option.label}`}
            ariaLabel={option.label}
          />
        ))}
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
