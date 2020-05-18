import React from 'react';
import Layout from '../components/layout';
import { Nav } from '../components/nav';
import { List } from './records.list'

export const Home: React.FC = () => {
  return <Layout hasBack={false} title="鲨鱼记账" footer={<Nav/>}>
    <List/>
  </Layout>
};