import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import CustomLink from 'src/components/CustomLink'

import { NavbarOptionContainer } from './styledComponents'

interface INavbarOptionProps {
  label: string
  route: string
}

const NavbarOption: FC<INavbarOptionProps> = ({ label, route }) => {
  const { pathname } = useLocation()

  return (
    <NavbarOptionContainer>
      <CustomLink $isActive={pathname === route} to={route} $nav>
        {label}
      </CustomLink>
    </NavbarOptionContainer>
  )
}

const MemoizedOption = memo(NavbarOption)

export default MemoizedOption
