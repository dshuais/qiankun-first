/*
 * @Author: dushuai
 * @Date: 2024-04-16 16:03:31
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-16 17:45:00
 * @description: NavigationEvents
 */
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents() {

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log('当前路由:>> ', url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  return null
}
