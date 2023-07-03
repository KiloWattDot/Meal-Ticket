import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Pages from './pages/Pages';
import  { useState } from "react";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [result, setResult] = useState('');
  function fetchInfo() {
    console.log(process.env.REACT_APP_API_URL)
  }



  return (
    
    
    <ApolloProvider client={client}>
     <button onClick={fetchInfo} />
     <div> result: {result} </div>
     <Pages />
     
   </ApolloProvider>
    
  );
}

export default App;
