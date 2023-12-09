type AllNavbarOptionsType = Array<{
  label: string
  route: string
  nav?: boolean
}>

export const allNavbarOptions: AllNavbarOptionsType = [
  {
    label: 'Fizz Buzz',
    route: '/fizzbuzz',
    nav: true,
  },
  {
    label: 'Color Change Square',
    route: '/color-change-square',
    nav: true,
  },
]
