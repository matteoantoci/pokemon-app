import React from 'react'
import Typography from '@material-ui/core/Typography'
import ErrorIcon from '@material-ui/icons/Error'
import styled from 'styled-components'
import { red } from '@material-ui/core/colors'
import { Flex } from './Flex'

const Wrapper = styled(Flex)`
  flex-direction: column;
`

const IconWrapper = styled(Flex)`
  color: ${red[500]};
  justify-content: center;
  margin-bottom: 16px;
`

export const Error: React.FC = props => {
  return (
    <Wrapper {...props}>
      <IconWrapper>
        <ErrorIcon fontSize="large" />
      </IconWrapper>
      <Typography variant="h4" component="h5" align="center">
        Error while loading contents =(
      </Typography>
    </Wrapper>
  )
}
