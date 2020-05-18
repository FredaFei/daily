import styled from 'styled-components';
import vars from '_vars.scss';

export const ListPanel = styled.div`
   font-size: 24px; 
  > h1{
    display:flex; justify-content: space-between; align-items: center; height:${vars.heightHeader};
    padding: 0 16px; border-bottom: 1px solid ${vars.colorBorder}; border-top: 1px solid ${vars.colorBorder};
  }
  > ol {
    background: white; border-bottom: 1px solid ${vars.colorBorder};
    > li{
    }
  }
`;

export const Day = styled.div`
  
`;
export const DayMain = styled.div`
  padding-left: .2rem;
`
export const DayTop = styled.div`
  font-size: 14px;
  color: #999;
  padding: 14px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
`
export const RecordItem = styled.div`
  >a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .right{
      margin-left: 8px;
      padding-right: 8px;
      flex-grow: 1;
      overflow: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 36px;
      border-bottom: 1px solid #ddd;
    }
  }
`;