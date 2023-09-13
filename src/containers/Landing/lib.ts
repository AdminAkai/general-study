import { GridItemsType } from 'src/types'

import CustomLink from 'src/components/CustomLink'

export const GridItems: GridItemsType = [
  {
    name: 'Demo: Global Themes Test',
    props: {
      to: 'https://animated-kitten-2077fb.netlify.app/',
    },
    Component: CustomLink,
  },
  {
    name: 'Demo: Van Life',
    props: {
      to: 'https://rainbow-bublanina-7d4b1b.netlify.app/',
    },
    Component: CustomLink,
  },
]
