type AllNavbarOptionsType = Array<{
  label: string
  route: string
  nav?: boolean
}>

export const allNavbarOptions: AllNavbarOptionsType = [
  {
    label: 'FizzBuzz',
    route: '/fizzbuzz',
    nav: true,
  },
  {
    label: 'ColorChangeSquare',
    route: '/color-change-square',
    nav: true,
  },
]
