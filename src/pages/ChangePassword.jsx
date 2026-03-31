import {useState} from 'react';
import {useAuth} from '../context/AuthContext';
function ChangePassword(){
    const {changePassword} = useAuth();
    const [form,setform] =useState({old:'',new:'',confirm:''});
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(form.new!==form.old) return alert("Password does't match!");
        alert("Password Update sucessful!");
        };
        return(
            <div>
             <h2>Change Password</h2>
             <form onSubmit={handleSubmit}style={styles.form}>
                <div style={styles.form}>
            <input type="password"
            value={form.old}
            placeholder="Old Password"
            onChange={(e)=>setform({...form,old:e.target.value})
        } style={styles.input}/>
        <input type="password"
            value={form.new}
            placeholder="New Password"
            onChange={(e)=>setform({...form,old:e.target.value})
        } style={styles.input}/>
        <input type="password"
            value={form.confirm}
            onChange={(e)=>setform({...form,old:e.target.value})
        }
        placeholder="confirm new Password" style={styles.input}/>
        <button type="submit" style={styles.update}>Update</button>
        <button style={styles.cancel}>Cancel</button>
        </div>
        </form>
            </div>
        )
}
const styles={
    input:{padding:'0.5rem',margin:'10px',border:'1px solid #ddd',borderRadius:'8px'},
    form:{display:'flex',flexDirection:'column',width:'300px',border:'1px solid #999',borderRadius:'5px',margin:'0 auto'},
    update:{float:'left',width:'140px',border:'none',margin:'5px',padding:'8px',borderRadius:'8px',background:'#007bff'},
    cancel:{float:'right',width:'140px',border:'none',margin:'5px',padding:'8px',borderRadius:'8px',}
}
export default ChangePassword;