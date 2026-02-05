'use client'

import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/store'
import { signInThunk, signOutThunk, userAction } from '@/reducers/user'
import { loadPostsThunk } from '@/reducers/posts'

export function Header() {
    const dispatch = useDispatch<AppDispatch>()

    const userName = useSelector((s: RootState) => s.user.userName)
    const loading = useSelector((s: RootState) => s.user.loading)
    const error = useSelector((s: RootState) => s.user.error)

    return (
        <header>
            {userName ? (
                <>
                    <button
                        onClick={() => dispatch(userAction.togglePermissions())}
                    >
                        {/* ohne Action Creator müsste man hier einen Action manuell erstellen */}
                        {/* dispatch({type: 'user/togglePermission' }) */}
                        {userName} has signed in
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch(signOutThunk())} //dispatch(asyncActionCreator())
                        disabled={loading}
                    >
                        {loading ? '...' : 'Sign out'}
                    </button>
                </>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        dispatch(signInThunk())
                        dispatch(loadPostsThunk())
                    }}
                    disabled={loading}
                >
                    {loading ? '...' : 'Sign in'}
                </button>
            )}
        </header>
    )
}
