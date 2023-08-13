import { useState } from "react"

export const TodoList = ()=>{

    const[todoList, setTodoList] = useState([])
    const[newTask, setNewTask] = useState("")

    const handleChange = (event)=>{
        setNewTask(event.target.value)
    }

    const addTask = ()=>{
        const task = {
            id: todoList.length === 0? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        } 
        setTodoList([...todoList, task])
        console.log([...todoList, task])
    };

    const deleteTask = (id)=>{
        setTodoList(todoList.filter((task)=>task.id !== id))
    }

    const completeTask = (id)=>{
        setTodoList(todoList.map((task)=>{
            if (task.id === id){
                return {...task, completed: true}
            }else{
                return task;
            }
        }))

    }



    
    return <div>

       <div className="addTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add task</button>
       </div>


        <div className="list" style={{backgroundColor: `completed? green : white`}}>
            {todoList.map((task)=> <div>
            <h3>{task.taskName}</h3>
            <button className="butt" onClick={()=>deleteTask(task.id)}>X</button>

            
        </div>
            )}
        </div>  
    </div>
}