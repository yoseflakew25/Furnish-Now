import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    // dev-2kc6zsik6p5xa04x.us.auth0.com
    // HubO18V8bnUBhcqplwTc7z6zuUZjmCb3
    domain="dev-2kc6zsik6p5xa04x.us.auth0.com"
    clientId="HubO18V8bnUBhcqplwTc7z6zuUZjmCb3"
    authorizationParams={{
      redirect_uri: `${window.location.origin}/cart`,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
