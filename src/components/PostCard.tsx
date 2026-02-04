'use client'

import { Post } from '@/state/types'
import { usePostsStore } from '@/state/usePostsStore'
import { useUserStore } from '@/state/useUserStore'

export function PostCard({ post }: { post: Post }) {
    const likedLabel = post.likedByMe ? 'Unlike' : 'Like'

    const userId = useUserStore((state) => state.userId)
    const userName = useUserStore((state) => state.userName)

    const isAuthor = userId === post.authorId

    const toggleLike = usePostsStore((state) => state.toggleLike)

    return (
        <article className="postCard">
            <header className="postHeader">
                <div className="postHeaderLeft">
                    <div className="postMeta">
                        Author:{isAuthor ? ' (You) ' : ' '}
                        <span className="postAuthorName">
                            {post.authorName}
                        </span>
                    </div>
                    <div className="postDate">
                        {new Date(post.createdAt).toLocaleString('de-DE')}
                    </div>
                </div>

                <div className="postHeaderRight">
                    Viewer: <span className="postViewerName">{userName}</span>
                </div>
            </header>

            <h3 className="postTitle">{post.title}</h3>
            <p className="postBody">{post.body}</p>

            <footer className="postFooter">
                <button
                    type="button"
                    className="postLikeButton"
                    aria-pressed={post.likedByMe}
                    onClick={() => {
                        toggleLike(post.id)
                    }}
                >
                    {likedLabel}
                </button>

                <div className="postLikes">
                    Likes:{' '}
                    <span className="postLikesCount">{post.likeCount}</span>
                </div>
            </footer>
        </article>
    )
}
