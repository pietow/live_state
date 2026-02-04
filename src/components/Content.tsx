'use client'

import { usePostsStore } from '@/state/usePostsStore'
import { useUserStore } from '@/state/useUserStore'
import { PostCard } from './PostCard'

export function Content() {
    const permissions = useUserStore((state) => state.permissions)

    const posts = usePostsStore((state) => state.posts)
    const error = usePostsStore((state) => state.error)
    const loading = usePostsStore((state) => state.loading)

    if (permissions === undefined) {
        return null
    }
    return (
        <div className="postsColumn">
            <p>
                {permissions.includes('admin')
                    ? 'Some important stuff that only an admin can do'
                    : 'Insufficient permissions'}
            </p>
            {loading ? <p className="loadingText">Loading posts... </p> : null}

            {error ? <p className="errorText">Error: {error} </p> : null}

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}
