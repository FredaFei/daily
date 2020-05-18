import React from 'react';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string | number;
}

export const numberToMoney = (number: number) => {
  // @ts-ignore
  const [before, after] = ''.split.call(number, '.')
  const suffix = after ? `.${after.substr(0, 2)}` : ''
  return `${before}${suffix}`
}
export const toHuman = (number: number) => {
  if (Number.isNaN(number)) {
    return '无效'
  } else {
    return <span>{numberToMoney(number)}</span>
  }
}
export const Money: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const number = +children;
  if (Number.isNaN(number)) {
    console?.error?.(`${children} is not a number`);
  }
  return (
    <span {...rest}>{toHuman(number)}</span>
  );
};