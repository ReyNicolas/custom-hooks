import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "./todoReducer"



export const useTodos = () => {
  
    const initialState = []

    const [todosCount, setTodosCount] = useState(0)
    const [pendingTodosCount, setPendingTodosCount] = useState(0)

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState ,init )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) ) ;
          
      }, [todos])
      
    


  
      const handleNewTodo = ( todo ) => {
          const action = {
              type: '[TODO] Add Todo',
              payload: todo
          }
  
          dispatch( action )
      }
  
  
      const handleDeleteTodo = ( id ) => {
          const action = {
              type: '[TODO] Remove Todo',
              payload: id
          }
  
          dispatch( action )
  
      }
      const handleToggleTodo = ( id ) => {
          const action = {
              type: '[TODO] Toggle Todo',
              payload: id
          }
  
          dispatch( action )
  
      }
  
  
  return ({
    handleToggleTodo,
     handleNewTodo, 
     handleDeleteTodo,
     todos,
     todosCount: todos.length, 
    pendingTodosCount: todos.filter( todo => !todo.done).length, 
  }
   
  )
}
