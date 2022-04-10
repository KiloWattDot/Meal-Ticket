import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar/index.js';
// import Checkout from './pages/Checkout/index.js'
// import CartModal from './pages/CartModal/index.js'




const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Router>
        <div className=" justify-center align-center min-100-vh">
          <Routes>
            <Route 
              path="/" 
              // element={<Home />}
            />
            <Route 
              // exact path="/checkout"  element={<Checkout />}
              // element={}
            />
            <Route 
              // exact path="/CartModal" element={<CartModal />}
              // element={}
            />
            <Route 
              path="*"
              // element={}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
