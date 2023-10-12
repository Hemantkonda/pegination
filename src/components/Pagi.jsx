import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagi = () => {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
      console.log(res);
    }
    fetchData();
  }, []);

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage);

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  console.log(pages);

  // finding Index of todo pages
  const todoLastIndex = currentPage * todosPerPage;
  const todoFirstIndex = todoLastIndex - todosPerPage;

  const visibleTodo = todos.slice(todoFirstIndex, todoLastIndex);

  // console.log(numOfTotalPages);

  const prevHandle = ()=>{
    if(currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const nextHandle = ()=>{
    if(currentPage < numOfTotalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div>
      <select onChange={(e)=> setTodosPerPage(e.target.value)}>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      {visibleTodo.map((eachTodo) => (
        <p key={eachTodo.id}>{eachTodo.title}</p>
      ))}

      <span onClick={prevHandle}>prev</span>
      {pages.map((page) => (
        <span
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={()=> setCurrentPage(page)}
        >{` ${page} |`}</span>
      ))}
      <span onClick={nextHandle}>next</span>
    </div>
  );
};

export default Pagi;
