import React from 'react'
import Typography from '@material-ui/core/Typography'
import LoopIcon from '@material-ui/icons/Loop'
import styled from 'styled-components'
import { amber } from '@material-ui/core/colors'
import { Flex } from './Flex'

const Wrapper = styled(Flex)`
  flex-direction: column;
`

const IconWrapper = styled(Flex)`
  color: ${amber[500]};
  justify-content: center;
  margin-bottom: 16px;
  & svg {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
`

export const Loading: React.FC = props => {
  return (
    <Wrapper {...props}>
      <IconWrapper>
        <LoopIcon fontSize="large" />
      </IconWrapper>
      <Typography variant="h4" component="h5" align="center">
        Loading Pokemon list...
      </Typography>
    </Wrapper>
  )
}
