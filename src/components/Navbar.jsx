import {Link} from 'react-router-dom'
import {ShoppingCart,Store} from 'lucide-react';
import {useCart} from '../context/CartContext';
function Navbar(){
    const {cart} =useCart();
    return(
        <nav style={{ 
      display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', 
      background: '#2ecc71', color: 'white', alignItems: 'center' 
    }}>
            <Link to="/" ><Store /><strong>Green Shop</strong></Link>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/cart" style={{ position: 'relative', color: 'white' }}>
                <ShoppingCart />
                <span style={{ 
            position: 'absolute', top: '-10px', right: '-10px', background: 'red', 
            borderRadius: '50%', padding: '2px 6px', fontSize: '12px' 
          }}>Cart:{cart.length}</span>
                </Link>
                </div>    
        </nav>
    );
}export default Navbar;