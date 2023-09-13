import CustomLink from 'src/components/CustomLink'
import { GridItemsType } from 'src/types'

export const GridItems: GridItemsType = [
  {
    name: 'LinkedIn',
    props: {
      to: 'https://www.linkedin.com/in/josh-adrian-trinidad/',
    },
    Component: CustomLink,
  },
  {
    name: 'Github',
    props: {
      to: 'https://github.com/AdminAkai',
    },
    Component: CustomLink,
  },
]
