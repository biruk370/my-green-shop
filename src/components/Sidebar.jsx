import { Home, ShoppingBag, Leaf, Settings, LogOut, X, Key, Smartphone, ChevronRight, Car } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
const Sidebar = ({ isOpen, onClose }) => {
    const {logout} = useAuth();
    return (
        <>
            {isOpen && (
                <div
                    onClick={onClose}
                    style={styles.backdrop}
                />
            )}
            <div style={{
                ...styles.sidebar, left: isOpen ? 0 : '-280px'
            }}>


                <div style={styles.header}>
                    <div style={styles.logo}>
                        <Leaf size={24} color="#2ecc71" />
                        <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>Green Shop</div>
                    </div>
                    <X size={24} onClick={onClose} style={{ cursor: 'pointer' }} />
                </div>


                <div style={styles.menuList}>
                    <div style={styles.menuItem}> Myproducts<ChevronRight style={styles.arrow} /></div>
                    <div style={styles.menuItem}><Home size={20} /><span>House</span><ChevronRight style={styles.arrow} /></div>
                    <div style={styles.menuItem}><Smartphone size={20} /> <span>Electronics</span><ChevronRight style={styles.arrow} /></div>
                    <div style={styles.menuItem}><ShoppingBag size={20} /><span>Food</span><ChevronRight style={styles.arrow} /></div>
                    <div style={styles.menuItem}><Car size={20} /><span>Car</span><ChevronRight style={styles.arrow} /></div>
                    <div style={styles.menuItem}><Settings size={20} /><span>Setting</span></div>
                </div>
                <div style={styles.footer}>
                    <div style={{ ...styles.menuItem, color: '#e74c3c' }}>
                        <LogOut size={20} onClick={logout}/><span>LogOut</span>
                    </div>
                </div>
            </div>
        </>
    )
};
const styles = {
    arrow: {
        marginLeft: 'auto',
        color: '#ccc'
    },
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    header: { padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingTop: '50px', color: '#333' },
    logo: { display: 'flex', alignItems: 'center' },
    menuList: { padding: '20px 10px', flex: 1 },
    menuItem: {
        display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px',
        cursor: 'pointer', transition: 'background 0.2s',
        borderRadius: '8px', marginBottom: '5px',
        fontSize: '16px', color: '#333'
    },
    footer: {
        padding: '20px',
        borderTop: '1px solid #eee',
    },
    sidebar: {
        position: 'fixed', top: 0, width: '260px', display: 'flex',
        flexDirection: 'column', height: '100vh', backgroundColor: '#fff', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', transition: 'left 0.3s ease-in-out', zIndex: 1001
    }


}
export default Sidebar;