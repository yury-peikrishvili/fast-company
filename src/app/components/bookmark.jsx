import React from "react";

const Bookmark = ({status, ...rest}) => {
    return (
        <div className={status?"bi-bookmark-check-fill":"bi-bookmark"} 
             onClick={() => rest.onToogleBookmark(rest.id)} style={{fontSize: "1.5rem", color: "cornflowerblue"}}>
      </div>
    )
}

export default Bookmark;