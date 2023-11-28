import CustomLink from 'src/shared/components/CustomLink'
import { GridItemsType } from 'src/shared/types/types'

export const GridItems: GridItemsType = [
  {
    name: 'LinkedIn',
    description: 'Connect, follow, or message me on LinkedIn',
    props: {
      to: 'https://www.linkedin.com/in/josh-adrian-trinidad/',
    },
    Component: CustomLink,
  },
  {
    name: 'Github',
    description:
      'Contains the source code for this website and many of my other projects',
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
