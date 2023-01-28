import React,{useEffect, useState} from 'react'
import AddToDo  from './AddToDo'

const App = () => {

    const [quote,setQuote] =useState('')

  

    useEffect(() => {
        fetch(`https://type.fit/api/quotes`)
         .then((response) => response.json())
         .then((data) => {
             
         const number=   Math.floor((Math.random() * 100) + 1);

         setQuote(data[number].text)

         })
       }, []);
      
  return (
    <div  className="container">
        <h1 className={'quoteColor'}>{quote}</h1>
        <h1>To-do List App</h1>
        <AddToDo />
    </div>
  )
}

export default App
