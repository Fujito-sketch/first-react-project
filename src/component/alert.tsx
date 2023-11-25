import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const Alert = ({children}: Props) => {
  let x = 0;
  x++
  return (
    <div key={x} className='alert alert-primary'>{children}</div>
  )
}

export default Alert