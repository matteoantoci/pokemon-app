import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

export const Flex: React.FC = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>
