export default function Button(props){
    return (

        <button onClick={props.filter}className={`bg-${props.color}-600 text-white rounded-xl w-32 h-10 m-2 hover:bg-blue-800`}>{props.button}</button>

       )
}