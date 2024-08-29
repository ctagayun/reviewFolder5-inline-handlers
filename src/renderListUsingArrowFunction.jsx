import * as React from "react";
import { ItemMemoized } from './item';
const RenderListUsingArrowFunction = (props, onRemoveItem) => {
  //Note: all function components by convention receive "props" even 
  //if the function doesn't have the param "props 
    return (
        <>
          <div className="row mb-2">
            <h5 className="themeFontColor text-center">
               Stories currently in the catalog
            </h5>
          </div>
       
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Url</th>
                <th>Author</th>
                <th>Num-Comments</th>
                <th>Points</th>
                <th>ObjectID</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.list.map((item) => (
                //   <tr key={item.objectID}>
                //     {Object.values(item).map((val) => (
                //         <td>{val}</td>
                //   ))}
                //   <span>
                //   <button type="button" className="btn btn-primary" onClick={props.handleClick} >
                //     Delete 
                //   </button>
                // </span>
                // </tr>
                <ItemMemoized
                      key={item.objectID}
                      objectID={item.objectID} 
                      item={item}
                      onRemoveItem = {onRemoveItem} //contains the onRemoveItem handler
                  />
              ))}
            </tbody>
          </table>
      </>

    );

};
export default RenderListUsingArrowFunction;


  
 
