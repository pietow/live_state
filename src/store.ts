import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./reducers/user"
import { postsReducer } from "./reducers/posts"

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store