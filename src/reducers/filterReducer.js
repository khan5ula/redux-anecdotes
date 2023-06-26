const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload
    default:
      return state
  }
}

export const filterAnecdote = filter => {
  return {
    type: 'FILTER',
    payload: filter
  }
}

export default filterReducer