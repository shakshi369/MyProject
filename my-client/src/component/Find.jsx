import axios from "axios";
import { useState } from "react"
import './Find.css';

export function Find() {
    const [id, setId] = useState("");
    const [employee, setEmployee] = useState(null);

    async function getData(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`https://backend-x6tj.onrender.com/api/employees/${id}`);
            setEmployee(response.data);
        }
        catch (err) {
            setEmployee(null);
            alert("Employee Not Found : " + err);

        }
    };
    return (
        <div className="find-container">
            <h3>Find Record By ID</h3>
            <hr />

            <input type="text" placeholder="Enter Id" value={id} onChange={e => setId(e.target.value)} required />
            <br /><br />
            <button onClick={getData}>Find Data</button>
            <br />
            {employee && (
                <div>
                    <h4>Employee Details</h4>
                    <hr />
                    <p>Emp Name is : {employee.empName}</p>
                    <p>Emp Email is : {employee.empEmail}</p>
                    <p>Emp Sal is : {employee.empSal}</p>
                </div>)}
        </div>
    )
}
