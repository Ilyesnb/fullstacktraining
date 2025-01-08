import { useState } from "react";
import { Containers, TodoContainer, Heading, Input, Bt, InputContainer, HContainer } from "../style/TodoInput.style"
import { useDispatch } from "react-redux";
import { addTodos } from "../Slices/TodoSlices";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoInput = () => {
    const [Todo, setTodo] = useState("")
    const dispatch = useDispatch()
    const TodoList = useSelector(state=>state.todos.todoList)
    const handleChange = (e) => {
        setTodo(e.target.value)

    }
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(
            addTodos({
                add: Todo,
                done: false,
                id: Date.now(),
            })
        )
        setTodo("")
    }
    return (
        <Containers>
            <TodoContainer>
                <HContainer>
                    <Heading>Get Thing Done !</Heading>
                </HContainer>
                <InputContainer onSubmit={handleClick}>
                    <Input onChange={handleChange} type="text" placeholder="What is the task tody?" required value={Todo} />
                    <Bt>Add Task</Bt>
                </InputContainer>
                {
                    TodoList.map((item, index) => (

                        <TodoItem key={index} Tasks={item.add} id={item.id} />
                    ))

                }
            </TodoContainer>
        </Containers>
    );
};
export default TodoInput;