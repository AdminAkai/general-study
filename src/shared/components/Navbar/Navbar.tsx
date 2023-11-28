import { FC } from 'react'

import NavbarOption from 'src/shared/components/NavbarOption'
import CustomLink from 'src/shared/components/CustomLink'
import IconRenderer from 'src/shared/components/IconRenderer'

import { allNavbarOptions } from './lib'
import { NavbarContainer, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <CustomLink to='/' $nav ariaLabel='home-navbar-link'>
        <span style={{ userSelect: 'none' }}>&lambda;dminis</span>
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
