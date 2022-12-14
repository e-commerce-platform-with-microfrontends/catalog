import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList/ProductList';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';

export default () => {
  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
        </Routes >
      </ThemeProvider>
    </div>
  )
}