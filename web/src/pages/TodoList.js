import { useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addItem} from '../actions/todoActions'
import Todo from '../components/Todo'
import '../styles/pages/todoList.css'
function TodoList(){
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const todos = useSelector(status=>status)
    return(
        <div id="todo-page">
            <div>
                <input ref={inputRef} type="text" name="" id=""/>
                <button onClick={()=>dispatch(addItem(inputRef.current.value))}>salvar</button>
            </div>
            {todos.map(item=><Todo key={item.id} id={item.id} text={item.text}/>)}
        </div>
    )
}
export default TodoList