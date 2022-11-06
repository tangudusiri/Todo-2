import React from "react";
import "./todo.css"
const Todo=()=>{
    return(
        
        <div className="todo-body">
        <header>
        <div className="heading">user name</div>
        </header>
        <div className="section-body">
        <section className="side-section">
        <div>Todo List</div>
        <div>History</div>
        <div>Logout</div>
        </section>
        <div className="activity">Add New Activity</div>
        <table></table>
        </div>
        </div>
    )
}
export default Todo