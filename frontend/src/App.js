import React from 'react';

import { ApolloProvider } from 'react-apollo';

import Dashboard from './components/Dashboard/Dashboard';
import { client as apolloClient } from './apollo';

export default () => (
  <ApolloProvider client={apolloClient}>
    <Dashboard />
  </ApolloProvider>
);
