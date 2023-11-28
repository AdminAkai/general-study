import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import CustomLink from 'src/shared/components/CustomLink'

import { NavbarOptionContainer } from './styledComponents'

interface INavbarOptionProps {
  label: string
  route: string
  ariaLabel: string
}

const NavbarOption: FC<INavbarOptionProps> = ({ label, route, ariaLabel }) => {
  const { pathname } = useLocation()

  return (
    <NavbarOptionContainer>
      <CustomLink
        $isActive={pathname === route}
        to={route}
        $nav
        ariaLabel={ariaLabel}
      >
        {label}
      </CustomLink>
    </NavbarOptionContainer>
  )
}

const MemoizedOption = memo(NavbarOption)

export default MemoizedOption
