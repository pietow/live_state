import { UserContext } from '@/state/UserContext'
import { use } from 'react'
import { type ReactNode } from 'react'


export function Main({ children }: { children: ReactNode }) {
    const { userName } = use(UserContext)
    return (
        <main>
            <h1>Welcome</h1>
            <p>{userName ? `Hello ${userName}!` : 'Please sign in'}</p>
            {children}
        </main>
    )
}
