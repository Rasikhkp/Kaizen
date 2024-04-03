import { Draft } from "@prisma/client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: { values: Draft[] } = {
    values: []
}

export const draftSlice = createSlice({
    name: "draft",
    initialState,
    reducers: {
        addDraft: (state, action: PayloadAction<Draft>) => {
            state.values.push(action.payload)
        },
        deleteDraft: (state, action: PayloadAction<string>) => {
            state.values = state.values.filter(draft => draft.id !== action.payload)
        },
        fillDraft: (state, action: PayloadAction<Draft[]>) => {
            state.values = action.payload
        },
        updateDraft: (state, action: PayloadAction<Draft>) => {
            state.values = state.values.map((draft) => {
                if (draft.id === action.payload.id) {
                    return action.payload
                }

                return draft
            })
        },
        publishDraft: (state, action: PayloadAction<Draft>) => {
            state.values = state.values.map((draft) => {
                if (draft.id === action.payload.id) {
                    return { ...draft, isPublished: action.payload.isPublished }
                } else {
                    return draft
                }
            })
        }
    }
})

export const { addDraft, deleteDraft, fillDraft, updateDraft, publishDraft } = draftSlice.actions

export default draftSlice.reducer
