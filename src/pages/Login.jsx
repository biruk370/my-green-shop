import {useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
function Login(){
    const[name,setname]=useState("");
    const {login} =useAuth();
    const navigate =useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(name.trim()){
            login({name:name});
            navigate("/cart");
        }
    }
    return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Please Login To Continue</h2>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={name}
        placeholder="Please Type Name here"
        onChange={(e)=>setname(e.target.value)}
        /><br />
        <button type="submit" style={{ padding: '10px 20px', background: '#2ecc71', color: 'white', border: 'none' }}>Login</button>
        </form>
    </div>
    );
}export default Login;