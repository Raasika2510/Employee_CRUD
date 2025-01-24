import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createEmployee", { name, position, salary })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div
            className="d-flex vh-100 justify-content-center align-items-center"
            style={{
                background: "linear-gradient(to right, #141e30, #243b55)",
            }}
        >
            <div className="w-50 bg-white rounded p-3 shadow-lg">
                <form onSubmit={Submit}>
                    <h2 className="text-center mb-4">ADD EMPLOYEE</h2>
                    <div className="mb-3">
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Position:</label>
                        <input
                            type="text"
                            placeholder="Enter Position"
                            className="form-control"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Salary:</label>
                        <input
                            type="number"
                            placeholder="Enter Salary"
                            className="form-control"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateEmp;
