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
          I made Adminis to demonstrate where innovation and passion meet
          technology. I&apos;m Josh Trinidad, the driving force behind this
          one-man-army company. My journey in the world of programming started
          was in highschool, and I&apos;ve been doing it professionally for a
          little over 8 years now. Over time, I&apos;ve honed my skills, staying
          at the forefront of industry trends and best practices. I love to
          learn, and programming never stops teaching.
        </AboutSummaryText>
        <AboutSummaryHeader>Let&apos;s Work Together</AboutSummaryHeader>
        <AboutSummaryText>
          Reach out and contact me, either as Adminis or Josh, and let&apos;s
          work together. Whether it&apos;s the next big new project you want to
          build from the ground up, or just a job position that needs filling,
          I&apos;m available for all. Click on any of the panels to the right to
          get started.
        </AboutSummaryText>
        <AboutSummaryHeader>Under Construction</AboutSummaryHeader>
        <AboutSummaryText>
          I am currently rebuilding Adminis to use ThreeJS for WebGL and 3D
          rendering, as well as working on a ton of personal projects. I&apos;ll
          set them up here, but they&apos;ll also be available on my Github
          (including the source code for this site). Stay tuned!
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
