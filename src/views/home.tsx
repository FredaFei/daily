import React from 'react';
import Layout from '../components/layout';
import { Nav } from '../components/nav';
import { List } from './records.list'
import { MainButton } from '../components/button/mainButton'
import { SizedButton } from '../components/button/sizedButton'
import { MinorButton } from '../components/button/minorButton'

export const Home: React.FC = () => {
  return <Layout hasBack={false} title="鲨鱼记账" footer={<Nav/>}>
    <List/>
    <MainButton>test</MainButton>
    <SizedButton>click</SizedButton>
    <MinorButton>click</MinorButton>
  </Layout>
};