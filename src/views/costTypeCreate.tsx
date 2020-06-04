import React from 'react';
import Layout from '../components/layout';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { HashQuery } from '../lib/getQuery';

export const _CostTypeCreate: React.FC<RouteComponentProps> = (props) => {
  const query = new HashQuery<{ type: 'earn' | 'expense' }>(props.location)
  const type = query.get('type') || 'expense'
  const map = {
    earn: '收入',
    expense: '支出',
  };
  const title = `添加${map[type as keyof typeof map]}类别`;
  return <Layout title={title}>
    CostTypeCreate
  </Layout>
};
export const CostTypeCreate = withRouter(_CostTypeCreate);