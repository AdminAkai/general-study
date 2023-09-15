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

export const AboutText = {
  summary: `I made Adminis to demonstrate where innovation and passion meet
    technology. I'm Josh Trinidad, the driving force behind this
    one-man-army company. My journey in the world of programming started
    in highschool, and I've been doing it professionally for a little
    over 8 years now. Over time, I've honed my skills, staying
    forefront of industry trends and best practices. I love to learn, and
    programming never stops teaching.`,
}
