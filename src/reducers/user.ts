import { signIn, signOut  } from "@/data/auth"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


export type UserState = {
    userId: string | undefined
    userName: string | undefined
    permissions: string[] | undefined 
    loading: boolean
    error: string | undefined
}

const initialState: UserState = {
    userId: undefined,
    userName: undefined,
    permissions: undefined,
    loading: false,
    error: undefined
}

export const signInThunk = createAsyncThunk("user/signIn", async () => { // Asynchrone Action Creators
    const user = await signIn()
    return {userId: user.id, userName: user.name, permissions: user.permissions }
})

export const signOutThunk = createAsyncThunk("user/signOut", async () => {
    await signOut()
    return true
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        togglePermissions(state) {
            const current = state.permissions ?? []
            state.permissions = current.length === 0 ? ['admin'] : []
        },
    },
    extraReducers: (builder) => {
        builder
            //signIn
            .addCase(signInThunk.pending, state => {
                state.loading = true
                state.error = undefined
            })
            .addCase(signInThunk.fulfilled, (state, action) => {
                state.loading = false
                state.userId = action.payload.userId
                state.userName = action.payload.userName
                state.permissions = action.payload.permissions
            })
            .addCase(signInThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? "Sign-in Failed"
            })
            .addCase(signOutThunk.pending, state => {
                state.loading = true
                state.error = undefined
            })
            .addCase(signOutThunk.fulfilled, (state) => {
                state.loading = false
                state.userId = undefined
                state.userName = undefined
                state.permissions = undefined
            })
            .addCase(signOutThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? "Sign-out failed"
            })
    }
})

export const userReducer = userSlice.reducer
export const userAction = userSlice.actions // synchrone Action creators