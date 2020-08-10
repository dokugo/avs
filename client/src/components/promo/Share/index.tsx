import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { requestUserUpdate } from 'store/sharing/thunks'

import { CheckedBox, Container, Label, Number, Title } from '../common'
import Buttons from './Buttons'

const ShareComponent: FC<StoreProps> = ({ shared, requestUserUpdate }) => {
  const stepCounter = shared ? <CheckedBox /> : <Number>1.</Number>

  const handleSharing = (): Promise<void> => requestUserUpdate({ shared: true })

  return (
    <Container>
      <Title>
        {stepCounter}
        <Label disabled={shared}>Поделись с друзьями:</Label>
      </Title>
      <Buttons disabled={shared} handleSharing={handleSharing} />
    </Container>
  )
}

const mapState = (state: RootState): { shared: boolean } => ({
  shared: state.sharing.user.shared,
})

const mapDispatch = { requestUserUpdate }

const connector = connect(mapState, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(ShareComponent)
