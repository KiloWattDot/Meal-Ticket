import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Pages from './pages/Pages';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {



  return (
    
    <ApolloProvider client={client}>
      
     <Pages />
     
   </ApolloProvider>
    
  );
}

export default App;
