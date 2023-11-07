import React, { useState } from "react";
import "./Navbar.css";
// import Profile from "../../profile/Profile";

const Navbar = () => {
  const [name, setName] = useState("");
  const [work, setWork] = useState("");

  const [data, setData] = useState([]);

  const handledata = (e) => {
    e.preventDefault();
    const task = { name: name, work: work };

    setData((data) => {
      return [...data, task];
    });

    //console.log(data);
  };

  const handleDelete = (name,work) => {
    alert(name+" ->"+work+"work is done");
    setData((data) => {
      const update = data.filter((e) => {
        return e.name !== name;
      });
      return update;
    });
  };

  return (
    <div className="banner">
      <div className="navbar">
        <h1 className="logo">ToDo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* <Inputform /> */}

      <div className="todo">
        <h3>Work details</h3>
        <hr />
        <form className="input_form" onSubmit={handledata}>
          <input
            type="text"
            placeholder="Work "
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              e.preventDefault();
              setWork(e.target.value);
            }}
          />
          <button type="submit" className="submit_btn">
            {" "}
            Register
          </button>
        </form>
      </div>

      <hr></hr>
      {data.map((e, index) => {
        return (
          <div className="profile">
            <div className="profile_left">
              <p>Name : {e.name}</p>
              <p>Work : {e.work}</p>
            </div>
            <div className="profile_right">
              <button
                onClick={() => {
                  handleDelete(e.name,e.work);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
