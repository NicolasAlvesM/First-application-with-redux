import {useDispatch} from 'react-redux'
import {removeItem} from '../actions/todoActions'
import '../styles/components/todo.css'
function Todo({id,text}){
    const dispatch = useDispatch()
    return (
        <div className='todo'>
            <p>{text}</p>
            <button onClick={()=>dispatch(removeItem(id))}>remover</button>
        </div>
    )
}
export default Todo