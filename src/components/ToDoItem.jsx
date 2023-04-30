import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function ToDoItem(props) {
    return (
       <div className={props.todo.completed ? "todo-row complete" : "todo-row"}>
           { props.todo.text }
        <div className='iconsContainer'>
            <AiOutlineDelete className='icon' style={{ marginRight: 5 }} onClick={() => props.removeTodo(props.todo.id)} />
            <AiOutlineCheckCircle className='icon' onClick={() => props.completeTodo(props.todo.id)} />
        </div>
       </div>
    );
}