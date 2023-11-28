import { FC, PropsWithChildren } from 'react'

import { CustomATag, ICustomATagProps } from './styledComponents'

interface ICustomLinkProps extends ICustomATagProps {
  to: string
  ariaLabel: string
}

const CustomLink: FC<PropsWithChildren<ICustomLinkProps>> = ({
  $isActive,
  $nav,
  to,
  children,
  ariaLabel,
}) => (
  <CustomATag
    to={to}
    $isActive={$isActive}
    $nav={$nav}
    target='_blank'
    aria-label={ariaLabel}
  >
    {children}
  </CustomATag>
)

export default CustomLink
