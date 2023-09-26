import { FC } from 'react'

import { logs } from './lib'

import { ChangelogContainer, ChangelogHeader } from './styledComponents'

const Changelog: FC = () => {
  return (
    <ChangelogContainer>
      <ChangelogHeader>Chλngelog</ChangelogHeader>
      {logs.map((log) =>
        log.en.map((text, index) => <p key={index}>{text}</p>)
      )}
    </ChangelogContainer>
  )
}

export default Changelog
