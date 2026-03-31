import { Link } from 'react-router-dom'
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { cart } = useCart();
    const { User } = useAuth();
    const [showDropdown, setshowDropdown] = useState(false);
    const [changepassword, setchangepassword] = useState(false);
    const { changePassword } = useAuth();
    const {logout} = useAuth();
    const [form, setform] = useState({ old: '', new: '', confirm: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.new !== form.old) return alert("Password does't match!");
        alert("Password Update sucessful!");
    };
    const [showPassword, setshowPassword] = useState({
        new: false,
        old: false,
        confirm: false
    })
    return (
        <nav style={{
            display: 'flex', justifyContent: 'space-between', padding: '1rem 0.5rem',
            background: '#2ecc71', color: 'white', alignItems: 'center'
        }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Menu style={{ cursor: 'pointer', margin: 0 }} onClick={() => setIsSidebarOpen(true)}/>
                <Link to="/" ><Store /><strong>Green Shop</strong></Link>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/addproduct" style={{ color: 'white', textDecoration: 'none' }}>Add Product</Link>
                <Link to="/cart" style={{ position: 'relative', color: 'white', bottom: '-15px' }}>
                    <ShoppingCart />
                    <span style={{
                        position: 'absolute', top: '-22px', right: '-10px', background: 'red',
                        borderRadius: '50%', padding: '2px 6px', fontSize: '12px'
                    }}>Cart:{cart.length}</span>
                </Link>
                {User ? (
                    <div style={{ position: 'relative' }}>
                        <div onClick={() => setshowDropdown(!showDropdown)} style={styles.avatar}>{User.name.charAt(0).toUpperCase()} </div>
                        {showDropdown &&
                            <div style={styles.dropdown}>
                                <div style={styles.dropHeader}>
                                    <div onClick={() => setshowDropdown(!showDropdown)} style={{ cursor: 'pointer' }}>{User.name.charAt(0).toUpperCase()}</div>
                                    <p><strong>{User.name}</strong></p>
                                    <p style={{ fontSize: '12px', color: '#999' }}>{User.email}</p>
                                </div>
                                <hr style={{ border: '0.1px', color: '#444' }} />
                                <button style={styles.dropItembtn} onClick={() => { setshowDropdown(false); setchangepassword(true); }}>🔑 Change Password</button>
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={logout}>🚪Logout</Link>
                            </div>
                        }
                    </div>
                ) : (<Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link>)
                }
                {changepassword &&
                    <div style={styles.dropdown}>
                        <div>
                            <h2>Change Password</h2>
                            <form onSubmit={handleSubmit} style={styles.form}>
                                <div style={styles.form}>
                                    <div style={styles.inputcontainer}>
                                        <input type={showPassword.old ? "text" : "password"}
                                            value={form.old}
                                            placeholder="Old Password"
                                            onChange={(e) => setform({ ...form, old: e.target.value })
                                            } style={styles.input} />
                                        <span onClick={() => setshowPassword({ ...showPassword, old: !showPassword.old })} style={styles.eye}>{showPassword.old ? <EyeOff size={20} /> : <Eye size={20} />}</span>
                                    </div>
                                    <div style={styles.inputcontainer}>
                                        <input type={showPassword.new ? "text" : "password"}
                                            value={form.new}
                                            placeholder="New Password"
                                            onChange={(e) => setform({ ...form, new: e.target.value })
                                            } style={styles.input} />
                                        <span onClick={() => setshowPassword({ ...showPassword, new: !showPassword.new })} style={styles.eye}>{showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}</span>
                                    </div>
                                    <div style={styles.inputcontainer}>
                                        <input type={showPassword.confirm ? "text" : "password"}
                                            value={form.confirm}
                                            onChange={(e) => setform({ ...form, confirm: e.target.value })
                                            }
                                            placeholder="confirm new Password" style={styles.input} />
                                        <span onClick={() => setshowPassword({ ...showPassword, confirm: !showPassword.confirm })} style={styles.eye}>{showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}</span>
                                    </div>
                                    <div style={styles.buttonGroup}>
                                        <button type="submit" style={styles.update} onClick={() => { handleSubmit }} >Update</button>
                                        <button style={styles.cancel} onClick={() => { setshowDropdown(true); setchangepassword(false); }}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
            <Sidebar isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)} />
        </nav>
    );
}
const styles = {
    avatar: { width: '35px', background: '#689f38', height: '35px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '2px solid white' },
    dropdown: { position: 'absolute', right: '0', top: '45px', width: '220px', background: '#202124', zIndex: 100, borderRadius: '8px', padding: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' },
    dropHeader: { textAlign: 'center', color: 'white' },
    dropItem: { display: 'block', padding: '10px 0', color: '#e8eaed', textDecoration: 'none', cursor: 'pointer' },
    input: { padding: '0.5rem', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', width: '80%', backgroundColor: '#333', position: 'relative', paddingRight: '35px' },
    form: { display: 'flex', flexDirection: 'column', width: '220px', borderRadius: '5px', margin: '0 auto' },
    update: { width: '140px', border: 'none', margin: '5px', padding: '8px', borderRadius: '8px', background: '#007bff', color: 'white', cursor: 'pointer' },
    cancel: { width: '140px', border: 'none', margin: '5px', padding: '8px', borderRadius: '8px', background: '#555', color: 'white', cursor: 'pointer' },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginTop: '10px',
        width: '100%'
    },
    dropItembtn: { display: 'block', alignItems: 'center', gap: '10px', width: '100%', padding: '10px 15px', backgroundColor: 'transparent', border: 'none', fontSize: '16px', color: 'white', cursor: 'pointer', transition: 'background 0.3s ease', textAlign: 'left' },
    eye: { position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#666', display: 'flex', alignItems: 'center' },
    inputcontainer: { background: 'transparent', position: 'relative', marginBottom: '15px', width: '100%' }
}
export default Navbar;