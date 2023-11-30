interface IChangelog {
  date: string
  en: string[]
  jp: string[]
}

export const logs: IChangelog[] = [
  {
    date: '09/26/2023',
    en: ['Test Log', 'Test Log 2'],
    jp: ['Test Log', 'Test Log 2'],
  },
]

export const sourceCodeLink =
  'https://github.com/AdminAkai/Adminis-construction'
