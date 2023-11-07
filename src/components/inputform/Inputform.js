import React from "react";
import './Inputform.css'
const Inputform = () => {
  
  return (
    <div className="todo">
      <h3>Work details</h3>
      <hr />
      <form className="input_form"  action="">
        <input  type="text" placeholder="Work " />
        <input type="text" placeholder="Description" />
        <button type="submit" className="submit_btn">
          {" "}
          Register
        </button>
      </form>
    </div>
  );
};

export default Inputform;
