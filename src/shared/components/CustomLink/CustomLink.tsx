import { FC, PropsWithChildren } from 'react'

import { CustomATag, ICustomATagProps } from './styledComponents'

export interface ICustomLinkProps extends ICustomATagProps {
  to: string
  ariaLabel: string
}

const CustomLink: FC<PropsWithChildren<ICustomLinkProps>> = ({
  $isActive,
  to,
  children,
  ariaLabel,
}) => (
  <CustomATag
    to={to}
    $isActive={$isActive}
    target='_blank'
    aria-label={ariaLabel}
  >
    {children}
  </CustomATag>
)

export default CustomLink
