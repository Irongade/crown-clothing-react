import React from "react";
import CollectionItem from "../collection-item/collection-item"

import "./preview-collection.scss"

// this renders individual items in our store (that is the items to be sold and their proce)
// we want to just display 4, hence the filter(), and map() to render the collection item
// title prop is gotten from menu-item for each category
// items prop represents the individual items(pictures and url and other deatils of each ) of the particular category
const PreviewCollection = ({title, items}) => {
    return ( 
        <div className = "preview-collection">
          <h1 className= "title"> {title.toUpperCase()} </h1>
          <div className="preview">
                {items
                .filter( (item, idx) => idx < 4 )
                .map((item) => (
//remember when rendering multiple items using one component, there must be an id
                    <CollectionItem key={item.id} item={item} /> 
                ))}
          </div> 
        </div>
    )
}

export default PreviewCollection;