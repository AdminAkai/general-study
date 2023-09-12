import { FC } from 'react'
// import { useNavigate } from 'react-router-dom'

import NavbarOption from 'src/components/NavbarOption'

import { allNavbarOptions } from './lib'
import { NavbarContainer, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarOptions>
        {allNavbarOptions.map((option, i) => (
          <NavbarOption {...option} key={`${i}-${option.label}`} />
        ))}
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
