import TextInputFormContainer from './TextInputForm/TextInputFormContainer'
import TextInputForm from './TextInputForm/TextInputForm.jsx'
import './App.css'

function App() {
  return (
    <div>
        {/* <Button text ="click me" styleType='error' more="something" onClickHandler={()=>{console.log("click me")}}/>
        <Button text ="click me" styleType='primary' more="something" onClickHandler={()=>{console.log("click me")}}/>
        <Button text ="click me" styleType='secondary' more="something" onClickHandler={()=>{console.log("click me")}}/>
          <TextInput label="Enter your text" placeholder="Enter some text"
          onChangeHandler={(e)=>console.log(e.target.value)}
          /> */}
            <TextInputFormContainer/>
          
    </div>
  )
}

export default App;
