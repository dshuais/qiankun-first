"use client"

import React, { ReactNode } from 'react'
import { registerMicroApps, start } from 'qiankun';

import MicroApps, { microConfig, microAppLifeCycles } from '@/common/microApps';

type Props = {
  children: ReactNode
}

registerMicroApps(MicroApps, microAppLifeCycles)

start(microConfig);

export default function BasicsLayout(props: Props) {

  const { children } = props

  return (
    <div className='w-full h-screen'>
      <div>BasicsLayout header</div>
      <div>
        BasicsLayout content
        {children}
      </div>
      <div>BasicsLayout footer</div>  
    </div>
  )
}
