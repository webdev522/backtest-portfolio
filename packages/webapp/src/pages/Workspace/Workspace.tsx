import React from 'react'
import { css } from '@emotion/react'
import { Helmet } from 'react-helmet-async'
import { undrawAuthentication } from '../../assets/images'
import { useUserState } from '../../atoms/authState'
import BacktestsGrid from '../../components/BacktestsGrid'
import ImageWithDescription from '../../components/ImageWithDescription'
import useResetLabEffect from '../../hooks/useResetLabEffect'

export type WorkspaceProps = {}

function Workspace({}: WorkspaceProps) {
  const [user] = useUserState()
  useResetLabEffect()

  if (!user) {
    return (
      <div css={wrapper}>
        <Helmet>
          <title>Workspace – Velofolio</title>
        </Helmet>
        <ImageWithDescription
          image={undrawAuthentication}
          description="Please sign in to list your saved backtests"
        />
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Workspace – Velofolio</title>
      </Helmet>
      <BacktestsGrid userId={user.id} />
    </>
  )
}

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  width: calc(100% - 16.25rem);
`

export default Workspace
