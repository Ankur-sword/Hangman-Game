import { Link } from "react-router-dom"

function StartGame(){
return (
    <>
    <h1>
         Start Game
        {/* Your comment goes here */}
    </h1>
    <Link to ='/play' className="text-blue-400">Play Game link</Link>
    </>
)
}
export default StartGame