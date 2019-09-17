import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import { AppBar, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
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
  margin-top: 32px;
  margin-bottom: 32px;
`

const Footer = styled.footer`
  padding: 16px 0;
  margin-top: auto;
  background-color: white;
`

const HomeButton = styled(IconButton).attrs({
  edge: 'start',
  color: 'inherit',
})`
  margin-right: 8px !important;
`

type TemplateProps = {
  onGoBack: () => void
}

export const Template: React.FC<TemplateProps> = ({ children, onGoBack }) => (
  <Wrapper>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <HomeButton onClick={onGoBack} data-test="home-btn">
          <HomeIcon />
        </HomeButton>
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
