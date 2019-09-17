import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Home } from './pages/Home'
import { Template } from './components/Template'

const client = new ApolloClient({
  uri: 'https://pokemon-samdavies.stylindex.now.sh',
})

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Template>
      <Home />
    </Template>
  </ApolloProvider>
)

export default App
