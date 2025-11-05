import React,{useState,useMemo} from "react";

const useMemoComponent = () => {

    const [count,setCount] = useState(0)
    const [todos,setTodos] = useState([])

    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(()=>expensiveCalculation(count),[count]);


    const increment = () => {
        setCount(c=>c+1);
    }
    const addTodo = () => {
        setTodos((t)=>[...t,"New Todo"])
    }
    return(
        <div>
            <div>
                <h2>My todos</h2>
                {
                    todos.map((todo,index)=>(
                        <p id={`todo-${index}`} key={index}>{todo}</p>
                    ))
                }
                <button id="add-todo-btn" onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                <h2 id="incr-cnt">Count: {count}</h2>
                <button id="incr-btn" onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                <p id="calc">{calculation}</p>
            </div>
        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log("calculating")
    for(let i =0;i<1000000000;i++){
        num+=1;
    }
    return num;
}

export default useMemoComponent;
