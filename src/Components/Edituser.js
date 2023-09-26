import axios from "axios";
import React, {useState, useEffect }from "react";
//saved data ko navigate karne k liye
import { useNavigate, useParams } from "react-router-dom";
//react hook use gareko useParams
function Edituser()
{   
    const navigate= useNavigate();    //saved data ko navigate karne k liye
    const {id}=useParams();
    console.log(id);
    const [formvalue, setFormvalue]= useState({name:'', email:'', address:'',designation:'',salary:''}); //useState ma states save gareko ho
    //msg display karane k liye state
    const [message, setMessage]= useState('');
    //state set garxa yasle.. ie. function to handlechange event
    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }
    // api ko respoense sanga interact garnalai edit bala part [4]bala ko link
    useEffect(()=>{
        const userRowdata=async()=>{
            const getUserData=await fetch("http://localhost/reactcrudphp/api/user.php/"+id);
            const resuserdata= await getUserData.json();
            console.log(resuserdata);
            setFormvalue(resuserdata);
        }
        userRowdata();
    }
    ,[id]);
    //[] useEffect ko dependency 
//submit handle garne function ho yo
    const handleSubmit =async(e)=>{
         e.preventDefault();
         //console.log(formvalue);//console ma hernalai ho
            //id ko value useParams ie. hooks bata aako ho
         const formData= {id:id,name:formvalue.name, email:formvalue.email, address:formvalue.address,designation:formvalue.designation,salary:formvalue.salary}; 
         //aba yaha hamro react ra api for database connect hunxa hai http://localhost/reactcrudphp/api/user.php "http://localhost/reactcrudphp/api/user.php"
         const res= await axios.put("http://localhost/reactcrudphp/api/user.php",formData);
         //let jsonres= res.data.json();  
         //saved data ko navigate karne k liye --- ye wala success  (echo json_encode(["success"=>"  ...   )
           if(res.data.success)
           {
            setMessage(res.data.success);
            setTimeout( ()=>{               
                navigate('/userlist');
            }, 2000);
            // console.log(formData);
           //user added succesfully k 2s k baadh userlist par 
           }
        }   
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Edituser </h5> 
                        {/* //yahi par ye msg show hoga */}
                        <p className="text-sucess"> { message }</p>                 
                         <form onSubmit={ handleSubmit}>
                            <div className="mb-3 row">
                            <label className="col-sm-2">Employee Name</label>
                            <div className="col-sm-10">
                                {/* usestate bata value aauxa hai ,,, onchange le event call garxa ie. function call garxa */}
                            <input type="text" name="name" value={formvalue.name} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label  className="col-sm-2">Email</label>
                            <div className="col-sm-10">
                            <input type="text" name="email" value={formvalue.email} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label  className="col-sm-2">Address</label>
                            <div className="col-sm-10">
                            <input type="text" name="address" value={formvalue.address} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label  className="col-sm-2">Designation</label>
                            <div className="col-sm-10">
                            <input type="text" name="designation" value={formvalue.designation} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label  className="col-sm-2">Salary</label>
                            <div className="col-sm-10">
                            <input type="number" name="salary" value={formvalue.salary} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-2"></label>
                            <div className="col-sm-10">
                           <button  name="submit" className="btn btn-success">Update</button>
                            </div>
                            </div>

                         </form>
      
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Edituser;