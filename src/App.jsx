import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'
import Pagi from './components/Pagi';

function App() {
  // const [todos, setTodos] = useState([]);
  // const [todosPerPage, setTodosPerPage] = useState(10)
  // const [currentPage, setCurrentPage] = useState(1)

  // async function fetchData(){
  //   try {
  //     let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //     let data = await res.data
  //     setTodos(data)
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   console.log(fetchData());
  // },[setTodos, currentPage])

  // const numOfTotalPages = Math.ceil(todos.length / todosPerPage)
  // // console.log(numOfTotalPages);

  // const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  // console.log(pages);

  // const LastIndexTodo = currentPage * todosPerPage
  // const firstIndexTodo = LastIndexTodo - todosPerPage

  // const visibleTodo = todos.slice(firstIndexTodo, LastIndexTodo)


  // const prevPageHandle = ()=>{
  //   if(currentPage > 1) setCurrentPage(currentPage - 1)
  // }

  // const nextPageHandle = ()=>{
  //   if(currentPage < numOfTotalPages) setCurrentPage(currentPage + 1)
  // }
  


  return (
    <>
    {/* <select onChange={(e)=> setTodosPerPage(e.target.value)}>
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
    </select>
      {visibleTodo.map((item)=>(
        <p key={item.id}>{item.title}</p>
      ))}
      <span onClick={prevPageHandle}>prev</span>
      <p>{pages.map((page)=>(
        <span key={page} onClick={()=> setCurrentPage(page)} className={page===currentPage ? 'active': ''}>{` ${page}  | `} </span>
      ))}</p>
      <span onClick={nextPageHandle}>next</span> */}

      <Pagi />

    </>
  )
}

export default App
