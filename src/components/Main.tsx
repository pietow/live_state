'use client'
import { useUserStore } from '@/state/useUserStore'
import { RootState } from '@/store'
import { type ReactNode } from 'react'
import { useSelector } from 'react-redux'


export function Main({ children }: { children: ReactNode }) {
   
    const userName = useSelector((s: RootState) => s.user.userName)
    return (
        <main>
            <h1>Welcome</h1>
            <p>{userName ? `Hello ${userName}!` : 'Please sign in'}</p>
            {children}
        </main>
    )
}
