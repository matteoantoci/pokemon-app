import React, { useCallback, useState } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Template } from './components/Template'
import { Home } from './components/Home'

const client = new ApolloClient({
  uri: 'https://pokemon-samdavies.stylindex.now.sh',
})

const App: React.FC = () => {
  const [detailsId, setDetailsId] = useState()
  const onGoBack = useCallback(() => {
    setDetailsId(undefined)
  }, [])
  const onPokemonDetailsClick = useCallback((id: string) => {
    setDetailsId(id)
  }, [])
  const showMoreInfoButton = !detailsId
  return (
    <ApolloProvider client={client}>
      <Template onGoBack={onGoBack}>
        <Home id={detailsId} onPokemonDetailsClick={showMoreInfoButton ? onPokemonDetailsClick : undefined} />
      </Template>
    </ApolloProvider>
  )
}

export default App
