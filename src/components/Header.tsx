import { use } from 'react'
import { UserContext } from '@/state/UserContext'

export function Header() {
    const {
        userName,
        handleSignIn,
        handleSignOut,
        loading,
        togglePermissions,
    } = use(UserContext)
    return (
        <header>
            {userName ? (
                <>
                    <button onClick={togglePermissions}>{userName} has signed in</button>
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
                    onClick={handleSignIn}
                    disabled={loading}
                >
                    {loading ? '...' : 'Sign in'}
                </button>
            )}
        </header>
    )
}
