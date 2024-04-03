import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: { values: 'draft' | 'published' } = {
    values: 'draft'
}

export const activeSlice = createSlice({
    name: "active",
    initialState,
    reducers: {
        chooseActive: (state, action: PayloadAction<'draft' | 'published'>) => {
            state.values = action.payload
        }
    }
})

export const { chooseActive } = activeSlice.actions

export default activeSlice.reducer
