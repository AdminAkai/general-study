import { FC } from 'react'

import NavbarLogo from './NavbarLogo'
import NavbarOption from './NavbarOption'

import { allNavbarOptions } from './lib'
import { NavbarContainer, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer animate>
      <NavbarLogo />
      <NavbarOptions>
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
