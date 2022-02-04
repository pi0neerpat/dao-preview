import React from 'react'
import AllContextProviders from '../src/providers'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

export const decorators = [
  (Story) => (
    <RedwoodApolloProvider>
      <AllContextProviders>
        <Story />
      </AllContextProviders>
    </RedwoodApolloProvider>
  ),
]
