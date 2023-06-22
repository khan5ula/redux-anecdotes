import { useSelector } from 'react-redux'
import Anecdote from './Anecdote'

const Anecdotes = () => {
  const anecdotes = useSelector(state => state)

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