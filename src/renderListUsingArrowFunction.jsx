import * as React from "react";

const RenderListUsingArrowFunction = (props) => {
  //Note: all function components by convention receive "props" even 
  //if the function doesn't have the param "props 
    return (
        <>
          <div className="row mb-2">
            <h5 className="themeFontColor text-center">
               Stories currently in the catalog
            </h5>
          </div>
          title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Url</th>
                <th>Author</th>
                <th>Num-Comments</th>
                <th>Points</th>
                <th>ObjectID</th>
              </tr>
            </thead>
            <tbody>
              {props.list.map((item) => (
                  <tr key={item.id}>
                    {Object.values(item).map((val) => (
                        <td>{val}</td>
                  ))}
                </tr>
              )
              )}
            </tbody>
          </table>
          <button className="btn btn-primary position-relative" >
            Delete Story
          </button>

        {/* <ul>
          {props.list.map( (item) => {  //Using JS Arrow
            return (
              <li key={item.objectID}>
                 <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <button type="button" onclick={props.handleClick}>Delete Me </button>
              </li> 
            ) 
           })}
        </ul> */}
      </>

    );

};
export default RenderListUsingArrowFunction;