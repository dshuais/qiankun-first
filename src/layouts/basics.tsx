"use client"

import React, { ReactNode } from 'react'
import { registerMicroApps, start } from 'qiankun';

type Props = {
  children: ReactNode
}

registerMicroApps([
  {
    name: 'reactApp',
    entry: 'http://localhost:3001',
    container: '#subapp-container',
    activeRule: '/react-app'
  }
])

start();

export default function BasicsLayout(props: Props) {

  const { children } = props

  return (
    <div>
      <div>BasicsLayout header</div>
      <div>
        BasicsLayout content
        {children}
      </div>
      <div>BasicsLayout footer</div>
    </div>
  )
}
