'use client'

import { useUserStore } from '@/state/useUserStore'
import { usePostsStore } from '@/state/usePostsStore'
import { PostCard } from './PostCard'


export function Content() {
    const permissions = useUserStore((state) => state.permissions)

    const posts = usePostsStore((state) => state.posts)
    const loading = usePostsStore((state) => state.loading)
    const error = usePostsStore((state) => state.error)

    if (permissions === undefined) return null

    return (
        <div className="contentRoot">
            <p className="permissionText">
                {permissions.includes('admin')
                    ? 'Some important stuff that only an admin can do'
                    : 'Insufficient permissions'}
            </p>

            <div className="postsColumn">
                {loading ? (
                    <p className="loadingText">Loading posts...</p>
                ) : null}
                {error ? (
                    <span className="errorText">Error: {error}</span>
                ) : null}

                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

