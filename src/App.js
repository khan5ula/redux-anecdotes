import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  const notification = useSelector(state => state.notification)

  return (
    <div>
      {notification ? (
        <Notification />
      ) : (
        <h2>Anecdotes</h2>
      )}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div >
  )
}

export default App