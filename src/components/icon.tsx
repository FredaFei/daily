import React from 'react'
import cs from 'classnames'
import { importAll } from 'lib/importAll'

try {importAll(require.context('icons', true, /\.svg$/))} catch (error) {console.log(error);}

interface Props extends React.SVGAttributes<SVGElement> {
  name?: string
}

const Icon: React.FC<Props> = props => {
  const { className, name, ...rest } = props
  return <svg className={cs('icon', className)} {...rest}>
    {name && <use xlinkHref={'#' + name}/>}
  </svg>
}

Icon.defaultProps = {
  fill: 'currentColor'
}
export default Icon