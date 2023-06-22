import { useSelector } from 'react-redux'
import Anecdote from './Anecdote'

const Anecdotes = () => {
  const anecdotes = useSelector(state => [...state].sort((a, b) => {
    return b.votes - a.votes
  }))

return (
  <div>
    {anecdotes.map(anecdote =>
      <Anecdote
        key={anecdote.id}
        anecdote={anecdote}
      />
    )}
  </div>
)
}

export default Anecdotes