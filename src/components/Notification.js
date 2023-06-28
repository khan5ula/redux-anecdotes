import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 15,
    background: 'lightGreen'
  }
  return notification ? <div style={style}>{notification}</div> : null;
}

export default Notification