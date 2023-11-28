import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from '@apollo/client'
import { SSM } from 'aws-sdk'
import { setContext } from '@apollo/client/link/context'

import store, { persistor } from 'src/shared/redux/store.ts'

import App from './App.tsx'

import './assets/fonts/stylesheet.css'

import './main.css'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext(async (_, { headers }) => {
  // return the headers to the context so httpLink can read them

  const { Parameter } = await new SSM()
    .getParameter({
      Name: 'GITHUB_TOKEN',
      WithDecryption: true,
    })
    .promise()

  return {
    headers: {
      ...headers,
      authorization: Parameter ? `Bearer ${Parameter}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
)
