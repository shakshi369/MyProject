import React,{useState} from "react";
import axios from 'axios';
import './Add.css';

export default function Add(){
    const [empNo, setEmpNo]= useState("");
    const [empName, setEmpName]= useState("");
    const [empEmail, setEmpEmail]= useState("");
    const [empSal, setEmpSal]= useState("");

    async function addHandler(e)
    {
        e.preventDefault();
        try
        {
           const response = await axios.post('https://backend-x6tj.onrender.com/api/employees',
            {empNo,empName,empEmail,empSal});
            alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }
    return (
        <div className="Add">
            <h1>Add Portal</h1>
            <hr />
            <form onSubmit={addHandler}>
                
                <input
                type="text"
                placeholder="Emp No"
                value={empNo}
                onChange={(e)=> setEmpNo(e.target.value)} required/>
                <br></br>


                <input
                type="text"
                placeholder="Emp Name"
                value={empName}
                onChange={(e)=> setEmpName(e.target.value)} required/>
                <br></br>

                <input
                type="text"
                placeholder="Emp Email"
                value={empEmail}
                onChange={(e)=> setEmpEmail(e.target.value)} required/>
                <br></br>

                
              
                <input
                type="number"
                placeholder="Salary"
                value={empSal}
                onChange={(e)=> setEmpSal(e.target.value)} required/>

                <br></br>
                <input type="submit" value="Submit"/>


            </form>
        </div>
    )





}
