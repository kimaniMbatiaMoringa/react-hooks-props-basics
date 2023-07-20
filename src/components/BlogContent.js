import React from "react";

function BlogContent(props) {
  //console.log(props)
  alert (props.articleText)
  if (!props.isPublished){
    return null
  }
  else{
    return(
      <div id="blog-content">
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead}</p>
      </div>
      
    ) 
  }
  
}

export default BlogContent;
