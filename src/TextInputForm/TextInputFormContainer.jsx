import { useState } from "react";
import TextInputForm from "./TextInputForm";
function TextInputFormContainer(){
    // let inputType="password"
    const [inputType,setInputType]=useState("password")
    function handleFromSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
}
function textInptuChanges(event){
  console.log("Text input changed");
  console.log(event.target.value);
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