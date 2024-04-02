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
        deleteDraft: (state, action: PayloadAction<{ id: string }>) => {
            state.values = state.values.filter(draft => draft.id !== action.payload.id)
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
        }
    }
})

export const { addDraft, deleteDraft, fillDraft, updateDraft } = draftSlice.actions

export default draftSlice.reducer
