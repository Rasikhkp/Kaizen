import { configureStore } from "@reduxjs/toolkit"
import draftReducer from './features/draft-slice'
import activeReducer from './features/active-slice'

export const store = configureStore({
    reducer: {
        draft: draftReducer,
        active: activeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const getAllDraft = (state: RootState) => state.draft.values
export const getActive = (state: RootState) => state.active.values
