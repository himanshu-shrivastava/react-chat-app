import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID={ process.env.PROJECT_ID }
      userName={ localStorage.getItem('username') }
      userSecret={ localStorage.getItem('password') }
      renderChatFeed={ (chatAppProps) => <ChatFeed { ...chatAppProps } /> }
      onNewMessage={ () => new Audio(process.env.S3_MP3_AUDIO_PATH).play() }
    />
  )
}

export default App
