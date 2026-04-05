import {useState,useEffect} from 'react';
import {useAuth} from '../context/AuthContext';
import {useNavigate,useLocation} from 'react-router-dom';
import {Eye,EyeOff} from 'lucide-react';
function Login(){
    const [showpassword,setshowpassword] =useState(false);
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    const[user,setuser]=useState({
      email:'',
      password:''
    });
    const {login,error} =useAuth();
    const navigate =useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const isSuccess=login(user);
        if(isSuccess){
            navigate(from,{replace:true});
        }
    }
    return (
    <div style={{ padding: '50px', textAlign: 'center',background:'#B0FFFA'  }}>
        <h2>Please Login To Continue</h2>
        <form onSubmit={handleSubmit}>
        <div style={styles.container}>
            <h2 style={{fontWeight:'bold',color:'#ccc'}}>Login</h2>
            <input type="email" placeholder="Email" style={styles.input}
            value={user.email} onChange={(e)=>setuser({...user,email:e.target.value})}/>
            <div style={styles.inputcontainer}>
            <input type={showpassword? "text":"password"} placeholder="Password" style={{margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ccc',width:'94%'}} value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})}/>
            <span onClick={() => setshowpassword(!showpassword)} style={styles.eye}>{showpassword ? <EyeOff size={20} /> : <Eye size={20} />}</span>
            </div>
            <button style={styles.button}>Login</button>
            {error &&
            <span style={{color:'red',fontSize:'14px',marginTop:'10px'}}> {error}</span>}
            <p>There is Account? <a href="/register" style={{textDecoration:'none'}}>Register</a></p>
        </div>
        </form>
    </div>
    );
}
const styles = {
  container: { display: 'flex', flexDirection: 'column', width: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' ,background:'#fff'},
  input: { margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  inputcontainer: { background: 'transparent', position: 'relative', marginBottom: '15px', width: '100%' },
  eye: { position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#666', display: 'flex', alignItems: 'center' }
};
export default Login;