import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import "react-icons/";
import Navbar from './components/Navbar/index.js';
import Checkout from './pages/Checkout/index.js'
import ItemSect from './components/Item-Section/index.js'
// import MenuTest from './pages/MenuTest/index.js'
import OrderModal from './components/Order-modal/index.js';
import MenuPage from './pages/MenuPage/index.js';
import { MenuProvider } from './utils/MenuContext.js';
import Home from './pages/Home/index.js'
import Map from './components/Map/index.js';

// import Login from './pages/Login';
// import { setContext } from '@apollo/client/link/context';




const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

function App() {



  return (
    <ApolloProvider client={client}>
     
      <Navbar />
      <MenuProvider>
      <Router>
        <div className=" justify-center align-center min-100-vh">
        <Routes>
            <Route
              exact
              path="/Home"
              element={<Home />}
            />
            <Route 
              exact path="/checkout"  element={<Checkout />}
              // element={}
            />
            <Route 
              exact path="/menupage" element={<MenuPage />}
              // element={}
            />
    
            <Route 
              exact path="/items" element={<ItemSect />}
              // element={}
            />
            <Route 
              exact path="/ordermodal" element={<OrderModal />}
              // element={}
            />
            <Route 
              exact path="/Map" element={<Map />}
            />
          </Routes>
        </div>
      </Router>
      </MenuProvider>
    </ApolloProvider>
  );
}

export default App;
