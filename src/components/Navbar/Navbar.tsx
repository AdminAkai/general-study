import { FC } from 'react'

import NavbarOption from 'src/components/NavbarOption'
import CustomLink from 'src/components/CustomLink'
import IconRenderer from 'src/components/IconRenderer'
import Adminis from 'src/components/Adminis'

import { allNavbarOptions } from './lib'
import { NavbarContainer, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <CustomLink to='/' $nav>
        <Adminis />
      </CustomLink>
      <NavbarOptions>
        <IconRenderer />
        {allNavbarOptions.map((option, i) => (
          <NavbarOption {...option} key={`${i}-${option.label}`} />
        ))}
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
