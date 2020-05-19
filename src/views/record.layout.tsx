import React, { ReactNode } from 'react';
import Layout from '../components/layout';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Tabs } from './record.tabs';

interface Props extends RouteComponentProps<{ id: string, type: string }> {
  costType?: CostType
  title: string
  action?: ReactNode
  footer?: ReactNode
}

const _recordLayout: React.FC<Props> = ({ title, action, footer, children }) => {
  return <Layout title={title} action={action} footer={footer}>
    <Tabs/>
    {children}
  </Layout>
};
export const RecordLayout = withRouter(_recordLayout)