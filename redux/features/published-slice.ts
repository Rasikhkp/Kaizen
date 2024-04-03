import { Published } from "@prisma/client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: { values: Published[] } = {
    values: []
}

export const publishedSlice = createSlice({
    name: "published",
    initialState,
    reducers: {
        addPublished: (state, action: PayloadAction<Published>) => {
            state.values.push(action.payload)
        },
        deletePublished: (state, action: PayloadAction<string>) => {
            state.values = state.values.filter(published => published.id !== action.payload)
        },
        fillPublished: (state, action: PayloadAction<Published[]>) => {
            state.values = action.payload
        },
        updatePublished: (state, action: PayloadAction<Published>) => {
            state.values = state.values.map((pub) => {
                if (pub.id === action.payload.id) {
                    return action.payload
                }

                return pub
            })
        }
    }
})

export const { addPublished, deletePublished, fillPublished, updatePublished } = publishedSlice.actions

export default publishedSlice.reducer
