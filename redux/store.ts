import { configureStore } from "@reduxjs/toolkit"
import draftReducer from './features/draft-slice'
import publishedReducer from './features/published-slice'
import activeReducer from './features/active-slice'

export const store = configureStore({
    reducer: {
        draft: draftReducer,
        published: publishedReducer,
        active: activeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const getAllDraft = (state: RootState) => state.draft.values
export const getAllPublished = (state: RootState) => state.published.values
export const getActive = (state: RootState) => state.active.values
