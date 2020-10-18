import React from 'react';

let List = (props)=>{
    return <ul>
      {
        props.data.map(
          (item)=><li key={item.id}>{item.title}</li>
        )
      }
    </ul>
}
export default List;