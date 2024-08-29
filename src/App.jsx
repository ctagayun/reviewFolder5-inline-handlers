/*
  Task:
    Incorporate bootstrap 

  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */

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
  
  const initialStories = [
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
  const [searchTerm, setSearchTerm] = React.useState('initialStories'); 
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); //update state hook variable in this case "searchTerm"
  }

   
  const handleRemoveStory = (item) => {
    console.log(`Item being deleted =  ${item.objectID} ${item.author}`);
    const newStories = searchTerm.filter(
      (story) => item.objectID !== story.objectID
    );
 
    setSearchTerm(newStories);
  };
 
  const searchedStories = initialStories.filter((story) =>
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

       <RenderListUsingArrowFunction list={searchedStories} onRemoveItem={handleRemoveStory} />
        
    </div>
  )
}

export default App
