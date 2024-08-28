/* eslint-disable no-unused-vars */
import * as React from 'react';


//Create a search component using arrow function expression

const Search = (props) => {

    //Lets capture the state whenever something is typed in the search textbox
    //const [searchTerm, setSearchTerm] = React.useState(''); - move this to app

    //perform a task in between. In this case a callback handler
    //====================================
    //  a callback handler within the
    //  component. -- this functionality is not being used
    //  the function was moved to app component under the name 
    //  "handleSearch"
    //====================================
     const handleChange = (event) => {
         //synthetic event
         console.log('The event is=' + event); 
         // value of target (here: input HTML element)
         console.log('The value of event is=' + event.target.value);

         //call SetSearchTerm state updater function feeding it 
         //event.target.value (here: input HTML element)
         setSearchTerm(event.target.value);

         //let's call the callback handler that was passed to the 
        //props.onSearch property. Whenever a user types into the input field 
        //now, the callback function that is passed down from the App component to the 
        //Search component via Props runs. This way, we can notify the App component 
        //when a user types into the input field in the Search component.
       props.onSearch(event);  

     };

    return(
        //call handleChange whenever something is inputted in the text box
       ///by calling onSearch which was passed as prop (defined in apps.jsx)
       //via props we are lifting state to apps.jsx. Good design strategy
        <div>
        <label htmlFor="search">SearchMe: </label>
        <input id="search" type="text" value={props.searchTerm} onChange={props.handleSearch} /> 
      </div>
    );

};

export default Search 