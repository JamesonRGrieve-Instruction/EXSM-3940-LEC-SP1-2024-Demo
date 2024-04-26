import React, { ReactNode } from 'react';
import Header from './Header';

const Layout = (props) => (
  <div>
    <Header />
    <div className='layout'>{props.children}</div>
  </div>
);

export default Layout;
