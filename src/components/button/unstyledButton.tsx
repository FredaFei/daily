import React, { forwardRef } from 'react'
import sc from 'classnames'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  badge?: string
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
}

const UnstyledButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { badge, onClick: outerOnClick, disabled, size, className, children, ...rest } = props
  const onClick: typeof outerOnClick = (e) => {
    outerOnClick?.(e)
  }

  return <button ref={ref} disabled={disabled} className={sc(className, { [`size-${size}`]: true })} {...rest} onClick={onClick}>
    {children}
    {badge && <span className="badge">{badge}</span>}
  </button>
})
UnstyledButton.defaultProps = {
  type: 'button',
  size: 'default',
  disabled: false
}
export { UnstyledButton }