interface IChangelog {
  date: string
  en: string[]
  jp: string[]
}

export const logs: IChangelog[] = [
  {
    date: '09/26/2023',
    en: ['log1', 'log2'],
    jp: ['log1', 'log2'],
  },
]

export const sourceCodeLink =
  'https://github.com/AdminAkai/Adminis-construction'
