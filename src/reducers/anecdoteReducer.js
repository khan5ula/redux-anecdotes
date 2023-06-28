import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
    })
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
    }
  }
})

export const { create, increment, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer