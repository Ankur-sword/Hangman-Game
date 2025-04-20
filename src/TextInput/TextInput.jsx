function  TextInput({type="text" ,placeholder="Enter your Input" ,label,onChangeHandler}) {
    return (<>
    <span className="text-gray-700">{label}</span>
    <input type={type}
     placeholder={placeholder}
     className="px-4 py-2 border border-gray-500 rounded-md w-full"
     onChange={onChangeHandler}
     ></input>
    </>)
}
export default TextInput;