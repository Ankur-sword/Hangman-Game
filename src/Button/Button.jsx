import getButtonStyling  from './getButtonStyle.js';
import './Button.css';
function MyButton({text,onClickHandler,type="button",styleType="primary"}){
   // console.log(props);
    return( 
    <button onClick={onClickHandler} 
    className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
    type={type}
    >
        {text}
        
    </button>);
}

export default MyButton;