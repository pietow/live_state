import { getPosts } from '@/data/posts'
import { Post } from '@/state/types'
import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'
import build from 'next/dist/build'
import { posts } from '../../../live_blog/src/data/posts';

export type PostsState = {
    posts: Post[]
    loading: boolean
    error: string | undefined
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: undefined,
}

export const loadPostsThunk = createAsyncThunk('posts/loadPosts', async () => {
    const posts = await getPosts()
    return posts
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        toggleLike(state, action: PayloadAction<string>) {
            const postId = action.payload

            state.posts = state.posts.map((p) => {
                if (p.id !== postId) return p

                const nextLiked = !p.likedByMe
                const nextCount = p.likeCount + (nextLiked ? 1 : -1)

                return { ...p, likedByMe: nextLiked, likeCount: nextCount }
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPostsThunk.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(loadPostsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(loadPostsThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? 'Failed to load posts'
            })
    },
})

export const postActions = postsSlice.actions
export const postsReducer = postsSlice.reducer
