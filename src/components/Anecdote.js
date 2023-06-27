import { useDispatch } from 'react-redux'
import { increment } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const handleVoteClick = (id) => {
    console.log('vote', id)
    dispatch(increment(id))
  }

  return (
    <div>
      {anecdote.content}
      {<br />}
      has {anecdote.votes}
      <button onClick={() => handleVoteClick(anecdote.id)}>vote</button>
    </div >
  )
}

export default Anecdote