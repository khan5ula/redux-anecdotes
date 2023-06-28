import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const handleVoteClick = (id) => {
    console.log('vote', id)
    dispatch(increment(id))
    dispatch(setNotification(`You voted '${anecdotes.find(n => n.id === id).content}'`))
    setTimeout(() => {
      dispatch(resetNotification())
    }, 5000)
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