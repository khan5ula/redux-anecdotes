import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload)
    },
    increment: (state, action) => {
      const id = action.payload
      const anecdoteToVote = state.find((n) => n.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes++
      }
    },
    setAnecdotes: (state, action) => {
      return action.payload
    },
  }
})

export const { create, increment, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer