import { FC } from 'react'

import Grid from 'src/components/Grid'

import { GridItems } from './lib'
import {
  AboutContainer,
  AboutHeader,
  AboutResume,
  AboutSummaryHeader,
  AboutSummaryText,
} from './styledComponents'
import GridPanel from 'src/components/GridPanel'

const About: FC = () => {
  return (
    <AboutContainer>
      <section>
        <AboutHeader>About Adminis</AboutHeader>
        <AboutSummaryHeader>Meet the Founder, CEO, and CTO</AboutSummaryHeader>
        <AboutSummaryText>
          Welcome to Adminis, where innovation and passion meet technology.
          I&apos;m Josh Adrian Trinidad, the driving force behind this
          one-man-army company. With over 8 years of experience in the world of
          programming, I have dedicated my career to crafting cutting-edge
          applications that make a difference.
        </AboutSummaryText>
        <AboutSummaryHeader>Let&apos;s Work Together</AboutSummaryHeader>
        <AboutSummaryText>
          My journey in the world of programming began over eight years ago, and
          I&apos;ve never looked back. Over the years, I&apos;ve honed my
          skills, staying at the forefront of industry trends and best
          practices. This experience has equipped me with the knowledge and
          expertise needed to tackle the most complex coding challenges.
        </AboutSummaryText>
      </section>
      <Grid panels={GridItems.length}>
        {GridItems.map(({ name, props, Component }, index) => (
          <GridPanel key={`${name}-${index}`}>
            <Component {...props}>{name}</Component>
          </GridPanel>
        ))}
        <GridPanel>
          <AboutResume
            href='../../assets/JoshTrinidadResume.pdf'
            download='JoshTrinidadResume.pdf'
          >
            Resume
          </AboutResume>
        </GridPanel>
      </Grid>
    </AboutContainer>
  )
}

export default About
