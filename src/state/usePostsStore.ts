import { create } from "zustand";
import { Post, PostState } from "./types";
import { getPosts } from "@/data/posts";

export const usePostsStore = create<PostState>(set => ({
    posts: [],
    loading: false,
    error: null,
    loadPosts: async () => {
        set({ loading: true, error: null})
        try {
            const posts = await getPosts() as Post[]
            set({ posts, loading: false })
        } catch {

        }
    },
    toggleLike: postId => {
        console.log('ID: ', postId)
        set((state) => ({
            posts: state.posts.map(p => {
                if (p.id !== postId) return p
                
                const nextLiked = !p.likedByMe
                const nextCount = p.likeCount + (nextLiked ? 1: -1)
               
                return  {
                    ...p,
                    likedByMe: nextLiked,
                    likeCount: nextCount
                }

            })
        }))
    },


}))