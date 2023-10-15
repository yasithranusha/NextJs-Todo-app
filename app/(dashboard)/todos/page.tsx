import TodoList from '@/components/TodoList'
import db from '@/utils/db'
import { resolve } from 'path';

const getData = async () => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(0), 200))
    const todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async () => {
    const todos = await getData()
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    )
}

export default TodosPage