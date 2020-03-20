import React from "react";

function Button(props) {
    return(
        <button onClick={props.onClick} className={`table table-hover ${props['data-value']}`} {...props}  />
    )
}
export default Button;
