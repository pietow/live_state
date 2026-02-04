'use client'

import { usePostsStore } from '@/state/usePostsStore'
import { useUserStore } from '@/state/useUserStore'

export function Header() {
    const userName = useUserStore((state) => state.userName)
    const loading = useUserStore((state) => state.loading)
    const handleSignIn = useUserStore((state) => state.handleSignIn)
    const handleSignOut = useUserStore((state) => state.handleSignOut)
    const togglePermissions = useUserStore((state) => state.togglePermissions)
    const loadPosts = usePostsStore((state) => state.loadPosts)

    return (
        <header>
            {userName ? (
                <>
                    <button onClick={togglePermissions}>
                        {userName} has signed in
                    </button>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        disabled={loading}
                    >
                        {loading ? '...' : 'Sign out'}
                    </button>
                </>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        handleSignIn()
                        loadPosts()
                    }}
                    disabled={loading}
                >
                    {loading ? '...' : 'Sign in'}
                </button>
            )}
        </header>
    )
}
