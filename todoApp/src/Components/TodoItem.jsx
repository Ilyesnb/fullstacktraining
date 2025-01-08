import { FaTrash } from "react-icons/fa"
import { Container, Peading, PContainer, TodoLine, BContainer, Button } from "../style/TodoItem.styled"
import { useDispatch } from "react-redux"
import { removeTodo } from "../Slices/TodoSlices";

const TodoItem = ({ Tasks, id }) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(
            removeTodo(id)
        )
    }
    return (
        <Container >
            <TodoLine>
                <BContainer>
                    <Button onClick={handleRemove}><FaTrash /></Button>
                </BContainer>
                <PContainer>
                    <Peading>{Tasks}</Peading>
                </PContainer>
            </TodoLine>
        </Container>
    );
};

export default TodoItem;