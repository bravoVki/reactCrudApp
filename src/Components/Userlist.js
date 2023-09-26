import axios from "axios";
import React,{useState, useEffect} from "react"; //useState and useEffect for displaying data
import { Link } from "react-router-dom";

export default function Userlist()
{

   const[userData, setUserData]=useState([]); //defining use state and initialize array for default state
   const[message,setMessage]=useState('');
   useEffect(()=>{
    getUserData();
   },[]);
   //get userData lai bahira lekheko ho
   const getUserData= async()=>{
    const reqData= await fetch("http://localhost/reactcrudphp/api/user.php");//local host k link
    const resData= await reqData.json();
    console.log(resData)
    // console.log(resData);
    setUserData(resData);
  }

const handleDelete=async(id)=>{
  const res=await axios.delete("http://localhost/reactcrudphp/api/user.php/"+id);
  setMessage(res.data.success); //yasle message show garxa that is response of api http://localhost/reactcrudphp/api/user.php
  getUserData(); //delete vaisake paxi page refresh hunxa
}

  return(
    <React.Fragment>
        <div className="container">
    <div className="row">
      <div className="col-md-10 mt-4">
        <h5 className="mb-4">User List</h5>
        {/* api bata aako msg yaha dekhinxa hai */}
      <p className="text-danger">{message}</p> 
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Email</th>
            <th scope="col">Designation</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th className="myclass"scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((uData,index)=>
          (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{uData.name}</td>
              <td>{uData.email}</td>
              <td>{uData.designation}</td>
              <td>{uData.address}</td>
              <td>{uData.salary}</td>
              
              <td className="myclass">
                <Link to={"/edituser/"+uData.id}className="btn btn-success mx-2">Edit</Link>
                <button className="btn btn-danger" onClick={()=>handleDelete(uData.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}