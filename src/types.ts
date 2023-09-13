import { ElementType } from 'react'

interface GridItemObject {
  name: string
  props: object
  Component: ElementType
}

export type GridItemsType = GridItemObject[]
