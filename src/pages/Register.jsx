import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {Eye,EyeOff} from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber,formatPhoneNumber,
	formatPhoneNumberIntl,
	isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Register() {
    const [showpassword,setshowpassword] =useState({
        password:false,
        confirmpassword:false
    });
    const { RegisterUser } = useAuth();
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: ''
    });
    const [errors, seterrors] = useState({});
    const validate = () => {
        let tempErrors = {};
        if (!formdata.name) tempErrors.name = "Name is required!";
        if (!formdata.email.includes('@')) tempErrors.email = "please enter correct Email!";
        if (formdata.password.length < 6) tempErrors.password = "Password at least 6 character!";
        if (formdata.confirmpassword !== formdata.password) tempErrors.confirmpassword = "password must same above enter!";
        seterrors(tempErrors);
        return Object.keys(tempErrors).length == 0;
    }
    const handleChange = (e) => {
        e.preventDefault();
        if (validate()) {
            RegisterUser(formdata);
            setformdata({
                name:'',
                email: '',
                phone:'',
                password: '',
                confirmpassword: ''
            });
        }
    }

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <form onSubmit={handleChange}>
                <div style={styles.container}>
                    <h2 style={{ fontWeight: 'bold', color: '#ccc', fontSize: '1.5rem' }}>Register</h2>
                    <input type="text" placeholder="Full Name" value={formdata.name} style={styles.input} onChange={(e) => setformdata({ ...formdata, name: e.target.value })} />
                    {errors.name && <span style={styles.errors}>{errors.name}</span>}
                    <input type="email" placeholder="Email" value={formdata.email} style={styles.input} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} />
                    {errors.email && <span style={styles.errors}>{errors.email}</span>}
                    <div>
                        <PhoneInput placeholder="Enter Phone number" value={formdata.phone} onChange={(value) => setformdata({ ...formdata, phone:value })} defaultCountry="ET" international error={formdata.phone ? (isValidPhoneNumber(formdata.phone) ? undefined : 'Invalid phone number'):'Phone number required'} style={{
    display: 'flex',
    alignItems: 'center',
    height: '45px',
    backgroundColor: '#ddd', 
    borderRadius: '4px',
    padding: '0 10px',
    marginBottom: '15px',width:'94%'
  }}numberInputProps={{
    style: {
      flex: 1,
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      outline: 'none',
      marginLeft: '10px'
    }
  }}/>
  Is possible: {formdata.phone && isPossiblePhoneNumber(formdata.phone) ? 'yes' : 'digit less than required '}
Is valid: {formdata.phone && isValidPhoneNumber(formdata.phone) ? 'true' : 'false'}
National: {formdata.phone && formatPhoneNumber(formdata.phone)}
International: {formdata.phone && formatPhoneNumberIntl(formdata.phone)}
                    </div>
                    <div style={styles.inputcontainer}>
                    <input type={showpassword.password ?"text":"password"} placeholder="Password" value={formdata.password} style={styles.inputpass} onChange={(e) => setformdata({ ...formdata, password:e.target.value })} />
                    <span style={styles.eye} onClick={()=>setshowpassword({...showpassword,password:!showpassword.password})}>{showpassword.password ? <EyeOff size={25}/>:<Eye size={25}/>}</span>
                    {errors.password && <span style={styles.errors}>{errors.password}</span>}
                    </div>
                    <div style={styles.inputcontainer}>
                    <input type={showpassword.confirmpassword ? "text":"password"} placeholder="Confirm Password" value={formdata.confirmpassword} style={styles.inputpass} onChange={(e) => setformdata({ ...formdata, confirmpassword: e.target.value })} />
                    <span style={styles.eye} onClick={()=>setshowpassword({...showpassword,confirmpassword:!showpassword.confirmpassword})}>{showpassword.confirmpassword ? <EyeOff size={25}/>:<Eye size={25}/>}</span>
                    {errors.confirmpassword && <span style={styles.errors}>{errors.confirmpassword}</span>}
                    </div>
                    <button style={styles.button} type="submit">Create Account</button>
                    <p>if you have Account? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></p>
                </div>
            </form>
        </div>
    )
}
const styles = {
    container: { display: 'flex', flexDirection: 'column', width: '350px', margin: '50px auto', padding: '40px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center', background: '#fff',justifyContent:'space-around' },
    input: { margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ccc'},
    inputpass:{padding:'10px 0',paddingRight:'10px',width:'95%'},
    button: { padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    errors: { color: 'red', fontSize: '12px', textAlign: 'left' },
    inputcontainer:{position:'relative',background:'transparent',width:'100%',marginBottom:'15px'},
    eye:{position:'absolute',right:'15px',top:'50%',transform:'translateY(-50%)',display:'flex',alignItems: 'center',cursor:'pointer'}
};
export default Register;