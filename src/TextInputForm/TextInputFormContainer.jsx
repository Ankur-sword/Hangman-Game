import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
function TextInputFormContainer(){
    // let inputType="password"
    const [inputType,setInputType]=useState("password")
    const [value,setValue]=useState("");
    const navigator=useNavigate();

function handleFromSubmit(event){
        event.preventDefault();
        console.log("Form Submitted",value);
        if(value){
            setTimeout(()=>{
                navigator('/play');
            },5000)
            
        }
}
function textInptuChanges(event){
  console.log("Text input changed");
  console.log(event.target.value);
  setValue(event.target.value);
}
function showHideClick(){
    if(inputType==="password")
        setInputType("text")
    else
    setInputType("password");
}
return(
    <TextInputForm 
    handleFromSubmit={handleFromSubmit}
    textInptuChanges={textInptuChanges}
    showHideClick={showHideClick}
    inputType={inputType}
    />
)

}
export default TextInputFormContainer;