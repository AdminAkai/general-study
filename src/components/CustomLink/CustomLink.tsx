import { FC, PropsWithChildren } from 'react'

import { CustomATag, ICustomATagProps } from './styledComponents'

interface ICustomLinkProps extends ICustomATagProps {
  to: string
}

const CustomLink: FC<PropsWithChildren<ICustomLinkProps>> = ({
  $isActive,
  $nav,
  to,
  children,
}) => (
  <CustomATag to={to} $isActive={$isActive} $nav={$nav}>
    {children}
  </CustomATag>
)

export default CustomLink
