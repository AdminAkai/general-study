interface GridItemObject {
  name: string
  route: string
}

type GridItem = GridItemObject[]

export const GridItems: GridItem = [
  {
    name: 'Global Themes Test',
    route: 'https://animated-kitten-2077fb.netlify.app/',
  },
  {
    name: 'Van Life',
    route: 'https://rainbow-bublanina-7d4b1b.netlify.app/',
  },
]
