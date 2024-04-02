import { configureStore } from "@reduxjs/toolkit"
import draftReducer from './features/draft-slice'

export const store = configureStore({
    reducer: {
        draft: draftReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const getAllDraft = (state: RootState) => state.draft.values
