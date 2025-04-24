
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import {Route,Routes} from 'react-router-dom'
import TextInput from './TextInput/TextInput'
import TextInputForm from './TextInputForm/TextInputForm'
function App() {
  return (
    <Routes>
      <Route path='/start' element={<StartGame/>}/>
      <Route path='/play' element={<PlayGame/>}/>
      <Route path="/" element={<TextInputForm></TextInputForm>}/>
     </Routes>
  )
}

export default App;
