import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateEmp() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getEmployee/${id}`)
            .then(result => {
                console.log(result);
                setName(result.data.name);
                setPosition(result.data.position);
                setSalary(result.data.salary);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateEmployee/${id}`, { name, position, salary })
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
                <form onSubmit={Update}>
                    <h2 className="text-center mb-4">UPDATE EMPLOYEE</h2>
                    <div className="mb-3">
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        />
                    </div>
                    <button className="btn btn-success w-100">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmp;
