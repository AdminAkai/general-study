import { FC, memo } from 'react'

import { NavbarOptionContainer, CustomLink } from './styledComponents'
import { useLocation } from 'react-router-dom'

interface INavbarOptionProps {
  label: string
  route: string
}

const NavbarOption: FC<INavbarOptionProps> = ({ label, route }) => {
  const { pathname } = useLocation()

  return (
    <NavbarOptionContainer>
      <CustomLink $isActive={pathname === route} to={route}>
        {label}
      </CustomLink>
    </NavbarOptionContainer>
  )
}

const MemoizedOption = memo(NavbarOption)

export default MemoizedOption
