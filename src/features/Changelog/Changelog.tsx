import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'

import { useHackerScramble } from 'src/shared/hooks/stringHooks'

import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/selectors'
import { Language } from 'src/shared/redux/settingsSlice/initialState'

import { logs, sourceCodeLink } from './lib'

import {
  ChangelogBulletPoint,
  ChangelogContainer,
  ChangelogHeader,
  ChangelogSubtitle,
} from './styledComponents'

const Changelog: FC = () => {
  const header = useHackerScramble('Chλngelog')
  const subtitle = useHackerScramble('Source Code:')
  const link = useHackerScramble(sourceCodeLink)

  const language: Language = useAppSelector(selectLanguage)

  return (
    <ChangelogContainer>
      <ChangelogHeader>{header}</ChangelogHeader>
      <ChangelogSubtitle>
        {subtitle}&nbsp;
        <CustomLink to={sourceCodeLink} ariaLabel='Website Github Repo'>
          {link}
        </CustomLink>
      </ChangelogSubtitle>
      {logs.map((log) =>
        log[language].map((text, index) => (
          <ChangelogBulletPoint key={index}>{text}</ChangelogBulletPoint>
        ))
      )}
    </ChangelogContainer>
  )
}

export default Changelog
