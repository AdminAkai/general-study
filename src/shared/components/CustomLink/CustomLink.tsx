import { FC, PropsWithChildren } from 'react'

import { CustomATag, ICustomATagProps } from './styledComponents'

export interface ICustomLinkProps extends ICustomATagProps {
  to: string
  ariaLabel: string
  nav?: boolean
}

const CustomLink: FC<PropsWithChildren<ICustomLinkProps>> = ({
  $isActive,
  nav,
  to,
  children,
  ariaLabel,
}) => (
  <CustomATag
    to={to}
    $isActive={$isActive}
    target={nav ? undefined : '_blank'}
    aria-label={ariaLabel}
  >
    {children}
  </CustomATag>
)

export default CustomLink
