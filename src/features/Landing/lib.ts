import { GridItemsType } from 'src/shared/types/types'

import CustomLink from 'src/shared/components/CustomLink'

export const GridItems: GridItemsType = [
  {
    name: 'Demo: Van Life (Under Construction)',
    description: 'Van Rental Website Demo',
    props: {
      to: 'https://rainbow-bublanina-7d4b1b.netlify.app/',
    },
    Component: CustomLink,
  },
  {
    name: 'Game: Cat Chaos',
    description:
      'One of my very first projects in Javascript, around 4-5 years old now. Custom built game engine in Javascript, using HTML and CSS',
    props: {
      to: 'https://adminakai.github.io/',
    },
    Component: CustomLink,
  },
  {
    name: 'Demo: Global Themes Test',
    description:
      'Demo for global themes, will add color blindness accessibility',
    props: {
      to: 'https://animated-kitten-2077fb.netlify.app/',
    },
    Component: CustomLink,
  },
]
