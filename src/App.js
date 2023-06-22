import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes/>
      <h2>create new</h2>
      <NewAnecdote/>
    </div >
  )
}

export default App