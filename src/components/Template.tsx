import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import { Flex } from './Flex'

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {`Copyright © Matteo Antoci ${new Date().getFullYear()}`}
  </Typography>
)

const Wrapper = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled(Container)`
  margin-top: 64px;
  margin-bottom: 16px;
`

const Footer = styled.footer`
  padding: 16px 0;
  margin-top: auto;
  background-color: white;
`

export const Template: React.FC = ({ children }) => (
  <Wrapper>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          PokemonIndex
        </Typography>
      </Toolbar>
    </AppBar>
    <Main component="main" maxWidth="md">
      {children}
    </Main>
    <Footer>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Footer>
  </Wrapper>
)
