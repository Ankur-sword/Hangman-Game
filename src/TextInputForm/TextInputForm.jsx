import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button.jsx"
function TextInputForm({handleFromSubmit,textInptuChanges,showHideClick,inputType}){
   
    return(
        <form onSubmit={handleFromSubmit}>
            <div>
                <TextInput
                type={inputType}
                label="Enter a word or a phrase"
                placeholder="Enter a word or phrase here ..."
                onChangeHandler={textInptuChanges}
                />
            </div>
            <div>
                <Button
                styleType="warning"
                text={inputType==="password" ? "Show" : "Hide" }
                onClickHandler={showHideClick}
                />
            </div>
            <Button
            styleType="primary"
            text="Submit"
            type="submit"
            
            />
        </form>
    )
}
export default TextInputForm ;