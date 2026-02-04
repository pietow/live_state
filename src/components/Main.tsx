'use client'
import { useUserStore } from '@/state/useUserStore'
import { type ReactNode } from 'react'


export function Main({ children }: { children: ReactNode }) {
    const userName  = useUserStore(state => state.userName) 
    return (
        <main>
            <h1>Welcome</h1>
            <p>{userName ? `Hello ${userName}!` : 'Please sign in'}</p>
            {children}
        </main>
    )
}
