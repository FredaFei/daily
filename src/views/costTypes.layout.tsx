import React, { ReactNode } from 'react';
import Layout from '../components/layout';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Tabs } from './costTypes.tabs';

interface Props extends RouteComponentProps<{ id: string, type: string }> {
  costType?: CostType
  title: string
  action?: ReactNode
  footer?: ReactNode
}

const _costTypeLayout: React.FC<Props> = ({ title, action, footer, children }) => {
  return <Layout title={title} action={action} footer={footer}>
    <Tabs/>
    {children}
  </Layout>
};
export const CostTypesLayout = withRouter(_costTypeLayout)