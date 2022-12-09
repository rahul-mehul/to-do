import React from "react";

const ToDoLists = (props) => {


    return (
        <>

            <li>
                <span onClick={() => { props.onSelect(props.id) }}>❌</span>
                {props.text}
            </li>
        </>
    )
};
export default ToDoLists;