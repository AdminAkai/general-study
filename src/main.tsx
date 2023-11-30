import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import store, { persistor } from 'src/shared/redux/store.ts'

import App from './App.tsx'

import './assets/fonts/stylesheet.css'

import './main.css'

/* 
  INCREDIBLY dangerous if not for the fact this is a fine-grained key, necessary for static deployment (for now),
  when Amplify Gen2 hosting feature is up and running will transition to that for hosting with environment secrets
*/
const publicKey =
  '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'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `bearer ${publicKey}`,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

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
