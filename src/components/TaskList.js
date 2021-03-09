import {useState} from "react";


function TaskList () {

    const [taskList, setTaskList] = useState([]);

    const [taskCompleted, setTaskCompleted] = useState([]);

    const handleAddTAsk = () => {
        const newTask = document.querySelector("#task").value;
        console.log("task", newTask)

        setTaskList((prevTaskList) => {
            return [...prevTaskList, newTask];
        })
        document.querySelector("#task").value='';

    }

    const handleDelete = (index) =>{
        setTaskList( (prevState) => {
            return prevState.filter((task, i) => i!== index);
        })
    }

    const handleCompleted = (index) => {
        setTaskCompleted( (prevState) => {
            return[...prevState, taskList[index]];
        })

        handleDelete(index);
    }

    return (
        <>
            <h1>Lista de tareas ({taskList.length} tareas)</h1>
            <input type="text" id="task" placeholder="Ingrese una tarea"/>
            <button onClick={handleAddTAsk}>Añadir</button>
            <button>Eliminar el último tarea</button>
            <div><h4>Tarea</h4></div>

            <ul>
                {
                    taskList.map((task, index) => {
                        return <>
                            <li key={index}> {task}
                                <button onClick={() => handleDelete(index)}>Eliminar </button>
                                <button onClick={() => handleCompleted(index)}> Completar </button>
                            </li>
                        </>
                    })
                }
            </ul>
            <h1>Lista de tareas completas ({taskCompleted.length}) tareas</h1>
            <ul>
                {
                    taskCompleted.map((task, index) => {
                        return <li key={index}> {task} </li>
                    })
                }
            </ul>
        </>
    );
}

export default TaskList;