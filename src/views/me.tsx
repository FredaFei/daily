import React from 'react';
import Layout from '../components/layout';
import { Nav } from '../components/nav';

export const Me: React.FC = () => {
  return <Layout hasBack={false} title="个人中心" footer={<Nav/>}>
    me
  </Layout>
};