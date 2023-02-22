import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchTodo } from '../store/action-creators/todo'

const TodoList: FC = () => {
    const { todos, loading, error, limit, page } = useTypedSelector(state => state.todo)
    const { fetchTodo, setTodoPage } = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodo(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(btn =>
                    <div onClick={() => setTodoPage(btn)} style={{ border: btn === page ? '2px solid red' : '1px solid gray', padding: '10px' }}>{btn}</div>
                )}
            </div>
        </div>
    )
}

export default TodoList