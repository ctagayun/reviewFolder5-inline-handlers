import * as React from 'react';

//Create another component that will display list of stories.
//This component called "Item" encapsulates the task of displaying 
//each 'Item' record

/*
   Finally, the Item component uses the incoming callback handler as a 
   function in a new handler. In this handler, we will pass the specific 
   item to it. Moreover, an additional button element is needed to trigger 
   the actual event:

   One popular solution is to use an inline arrow function, 
   which allows us to sneak in arguments like the item:
   <button type="button" onClick={() => onRemoveItem(item)}> 
        Dismiss
   </button>
 
  */
const Item = ({item, onRemoveItem }) => (
    <tr>
     <td>{item.title}</td>
     <td>{item.url}</td>
     <td>{item.author}</td>
     <td>{item.num_comments}</td>
     <td>{item.points}</td>
     <td>{item.objectID}</td>
     <span>
      <button className="btn btn-primary" type="button" onClick={() => onRemoveItem(item)}>
        Delete
      </button>
    </span>
      
    </tr>
 
);

//Memoizing is way to cache the output of JSX component 
//so that it doesn't re-render. It is done by wrapping the 
//component with React.memo hook
const ItemMemoized = React.memo(Item)

export default Item;
//exporting the memoized version will let you use that 
//version in the Item
export {ItemMemoized}; 