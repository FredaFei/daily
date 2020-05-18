import React from 'react';
import styled from 'styled-components';
import swr, { useSWRPages } from 'swr';
import { Link } from 'react-router-dom';
import Icon from '../components/icon';
import { MainButton } from '../components/button/mainButton'
import { Day, DayMain, RecordItem, DayTop } from './home.styled'
import { defaultHttp } from '../lib/http';
import { getAmount } from '../lib/getAmount'
import { Loading } from '../components/loading';
import { Padding } from '../components/padding'
import { Stretch } from '../components/stretch'
import { Center } from '../components/center'
import { Money } from '../components/money'

const Wrapper = styled.div`
  
`

interface Props {
  item: CostItemProps
}

export const List: React.FC = () => {
  const {
    pages, loadMore, isReachingEnd, isEmpty, isLoadingMore
  } = useSWRPages<number | null, PagedResources<CostItemProps>>(
    'shops',
    ({ offset, withSWR }) => {
      offset = offset || 0;
      const { data: response } = withSWR(swr(['/dailyCost/costList', offset + 1, 10], async (url, pageNum, pageSize) => {
        return (await defaultHttp.get<PagedResources<CostItemProps>>(url, {
          params: { pageNum, pageSize },
          autoHandlerError: true
        })).data;
      }));
      if (!response) {return <Loading/>}
      return response.data?.map(day => (
        day.records.length > 0 &&
        <Day key={day.id}>
          <DayTop>
            <div className='time'>01月20日 星期一</div>
            <div className='sum'> 收入：<Money>{getAmount(day.records.filter(i=>i.costType===0))}</Money></div>
            <div className='sum'> 支出：<Money>{getAmount(day.records.filter(i=>i.costType===1))}</Money></div>
          </DayTop>
          <DayMain>
            {
              day.records.map(record => <RecordItem key={record.id}>
                <Link to={`/detail?id=${record.id}`}>
                  <Icon name={record.icon}/>
                  <div className="right">
                    <span className="name">{record.name}</span>
                    <div className="amount">{record.amount}</div>
                  </div>
                </Link>
              </RecordItem>)
            }
          </DayMain>
        </Day>
      ))
    },
    (SWR, index) => (SWR.data && SWR.data.pageNum < SWR.data.totalPage) ? index + 1 : null, [])

  return <>
    <Wrapper>
      {pages}
    </Wrapper>
    {isEmpty ? <Center>暂无数据</Center> :
      <Padding>
        <Stretch>
          {isReachingEnd ? <Center>没有更多了</Center> :
            isLoadingMore ? null :
              <MainButton onClick={() => loadMore()}>加载更多</MainButton>}
        </Stretch>
      </Padding>
    }
  </>
};

