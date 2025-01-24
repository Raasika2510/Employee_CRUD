import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Employees() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteEmployee/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex flex-column vh-100 text-white"
      style={{
        background: "linear-gradient(to right, #141e30, #243b55)",
        overflow: "hidden",
      }}
    >
      <header
        className="text-center py-4"
        style={{
          backgroundColor: "#1e3a5f",
          borderBottom: "2px solid #ffffff50",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        EMPLOYEE DATABASE CRUD OPERATIONS USING MERN
      </header>
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <div
          className="w-75 bg-light rounded p-4 shadow"
          style={{ border: "1px solid #ddd" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 style={{ color: "black" }}>LIST OF EMPLOYEES</h3>
            <Link to="/create" className="btn btn-success">
              Add Employee +
            </Link>
          </div>
          <table className="table table-striped table-hover">
            <thead className="bg-primary text-white">
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
  {users.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.position}</td>
      <td>{user.salary}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center">
          <Link
            to={`/update/${user._id}`}
            className="btn btn-warning me-2 w-100"
          >
            Update
          </Link>
          <button
            className="btn btn-danger w-100"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
