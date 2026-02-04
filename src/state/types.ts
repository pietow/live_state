export type UserState = {
    userId: undefined | string
    userName: undefined | string
    permissions: undefined | string[]
    loading: boolean
    handleSignIn: () => Promise<void>
    handleSignOut: () => Promise<void>
    togglePermissions: () => void
}

export type Post = {
    id: string
    authorId: string
    authorName: string

    createdAt: string
    title: string
    body: string

    likedByMe: boolean
    likeCount: number
} 

export type PostState = {
    posts: Post[]
    loading: false | true
    error: null | string
    loadPosts: () => Promise<void>
    toggleLike: (postId: string) => void
}