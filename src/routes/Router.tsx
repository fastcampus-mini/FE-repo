import React from 'react';
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Cart from '@/pages/Cart';
import Mypage from '@/pages/Mypage';
import styled from '@emotion/styled';
import ProductDetail from '@/pages/ProductDetail';
import Buy from '@/pages/Buy';
import App from '@/App';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.MYPAGE} element={<Mypage />} />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.BUY} element={<Buy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;

const Layout = styled.div`
  position: relative;
  z-index: 1;
  // padding: 0 10px;
`;
