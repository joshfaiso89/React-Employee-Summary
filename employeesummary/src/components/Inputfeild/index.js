import React from "react";

function InputField(props) {
    return(
        <div>
            <input name="search" value={props.searchValue} onChange={props.handleInputChange}/>
        </div>
    )
} 

export default InputField;
