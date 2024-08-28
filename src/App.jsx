// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Search from './search.jsx';
import './App.css'

import RenderListUsingArrowFunction from "./renderListUsingArrowFunction.jsx";
import RenderListUsingJSFunction from "./renderListUsingJSFunction.jsx";

//Declaration of App component
function App() {

  const welcome = {
     greeting: 'Hey',
     title: "Chito",
  };
  
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
 
  
  //Make the "stories" stateful
  const [searchTerm, setSearchTerm] = React.useState('stories'); 
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); //update state hook variable in this case "searchTerm"
  }

  const handleClick = () => {

  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
       <h1> 
          {welcome.greeting} {welcome.title}
      </h1>
       
       {/* // B - Pass in a callback handler as prop to search component*/}
       <Search handleSearch={handleSearch} searchTerm={searchTerm}/> 

       <hr/>

       <RenderListUsingArrowFunction list={searchedStories} handleClick={handleClick} />
        
    </div>
  )
}

export default App
