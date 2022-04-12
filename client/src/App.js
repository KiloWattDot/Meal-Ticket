import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import "react-icons/";
import Navbar from './components/Navbar/index.js';
import Checkout from './pages/Checkout/index.js'
import ItemSect from './components/Item-Section/index.js'
// import MenuTest from './pages/MenuTest/index.js'
// import OrderModal from './components/Order-modal/index.js';
import MockCart from './components/MockCart/index.js'


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
              exact path="/checkout"  element={<Checkout />}
              // element={}
            />
            <Route 
              exact path="/items" element={<ItemSect />}
              // element={}
            />
            <Route 
              exact path="/mock" element={<MockCart />}
              // element={}
            />
            <Route 
              // exact path="/menutest" element={<MenuTest />}
              // element={}
            />
            <Route 
              // exact path="/ordermodal" element={<OrderModal />}
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
