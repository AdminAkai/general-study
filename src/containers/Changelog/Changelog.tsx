import { FC } from 'react'

import { logs } from './lib'

import { ChangelogContainer } from './styledComponents'

const Changelog: FC = () => {
  return (
    <ChangelogContainer>
      {logs.map((log) =>
        log.logsEN.map((text, index) => <p key={index}>{text}</p>)
      )}
    </ChangelogContainer>
  )
}

export default Changelog
