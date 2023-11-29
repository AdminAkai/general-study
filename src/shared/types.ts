import { FC, PropsWithChildren } from 'react'

import { ICustomLinkProps } from './components/CustomLink/CustomLink'

interface GridItemObject {
  name: string
  description?: string
  props: {
    to: string
    ariaLabel: string
  }
  Link: FC<PropsWithChildren<ICustomLinkProps>>
}

export type GridItemsType = GridItemObject[]
