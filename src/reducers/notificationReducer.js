import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      return action.payload
    },
    resetNotification: (state, action) => {
      return initialState
    }
  }
})

export const { setNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer