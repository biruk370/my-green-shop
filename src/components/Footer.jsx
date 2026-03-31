import {Mail,Phone,MapPin,Github,Send,Copyright} from 'lucide-react';
import {Link} from 'react-router-dom';
const Footer =()=>{
    return(
        <footer style={styles.footer}>
            <div style={styles.footerGrid}>
                <div>
                    <h3 style={styles.footerTitle}>Green Shop</h3>
                    <p style={styles.footerText}>Quality products, delivered to your doorstep.</p>
                </div>
                <div>
                    <h4 style={styles.footerTitle}>Quick Links</h4>
                    <ul style={styles.footerList}>
                        <Link to="/" style={{cursor:'pointer',textDecoration:'none',color:'white'}}><li>Home</li></Link>
                        <li><Link to="/register" style={{cursor:'pointer',textDecoration:'none',color:'white'}}>Register</Link></li>
                        <Link to="/allproduct" style={{cursor:'pointer',textDecoration:'none',color:'white'}}><li>All Products</li></Link>
                        <Link to="/" style={{cursor:'pointer',textDecoration:'none',color:'white'}}><li>About Us</li></Link>
                    </ul>
                </div>

                <div>
                    <h4 style={styles.footerTitle}>Contact Us</h4>
                    <div style={styles.contactItem}><Phone size={16}/>+251 931335221</div>
                    <div style={styles.contactItem}><Mail />birukabate78@gmail.com</div>
                    <div style={styles.contactItem}><MapPin />Addis Ababa,Ethiopia</div>
                </div>
                <div style={{ display: 'flex', gap: '15px'}}>
                    <h4 style={styles.footerTitle}>Follow Us</h4>
                    <div style={styles.contactItem}><Send /><span><a href="https://t.me/biruk0507" target="_blank" style={{cursor:'pointer',textDecoration:'none',color:'white'}}>Telegram</a></span></div>
                    <div style={styles.contactItem}><Github /><span><a href="https://github.com/biruk370" target="_blank" style={{cursor:'pointer',textDecoration:'none',color:'white'}}>Github</a></span></div>
                </div>
            </div>
            <div style={styles.copyright}><Copyright /> {new Date().getFullYear()} Green Shop. All rights reserved.</div>
        </footer>
    )
};export default Footer;
const styles ={
    footer:{background: '#202124', color: 'white', padding: '50px 20px 20px', marginTop: '50px'},
    footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' },
    footerTitle:{color: '#2ecc71', marginBottom: '20px'},
    footerText: { fontSize: '14px', lineHeight: '1.6', color: '#ccc' },
    footerList: { listStyle: 'none', padding: 0, fontSize: '14px', color: '#ccc', lineHeight: '2.5' },
    contactItem: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#ccc' },
    copyright: { textAlign: 'center', borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', fontSize: '12px', color: '#888' }
}