import { FC } from 'react'

import { useAppSelector } from 'src/redux/store'
import { selectLanguage } from 'src/redux/features/settingsSlice/selectors'
import { Language } from 'src/redux/features/settingsSlice/initialState'

import { logs, sourceCodeLink } from './lib'

import {
  ChangelogBulletPoint,
  ChangelogContainer,
  ChangelogHeader,
  ChangelogSubtitle,
} from './styledComponents'
import { useHackerScramble } from 'src/hooks/stringHooks'
import CustomLink from 'src/components/CustomLink'

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
