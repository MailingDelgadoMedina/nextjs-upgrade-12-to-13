import React from 'react'
const fetchTodos = async () => {
    const res = fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos = await (await res).json();
}
export default function TodosList() {
    const todos = await fetchTodos()

    return (
        <div>TodosList</div>
    )
}
