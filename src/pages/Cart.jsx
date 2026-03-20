import {useCart} from '../context/CartContext'
import {Link} from 'react-router-dom';
function Cart(){
    const {cart,removeFromeCart} = useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0);
        return(
            cart.length==0 ? (
            <div style={{padding:'50px',textAlign: 'center'}}>
                <h2>Carton Empty!🛒</h2>
                <Link to="/">Back To Shoping</Link>
            </div>
        ):(
        <div style={{ padding: '20px' }}>
            <h1>Selected Items</h1>
            {
                cart.map((item,index)=>(
                    <div key={index} style={{ 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '1px solid #ddd', padding: '10px 0' 
          }}>
                        <div>
                            <img src={item.image} alt={item.image} style={{ width: '60px', borderRadius: '5px' }}/>
                        </div>
                        <div>
                            <h4>{item.name}</h4>
                            <h4>{item.price}</h4>
                        </div>
                        <button onClick={() => removeFromeCart(item.id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Remove</button>
                    </div>
                ))
            }
            <div style={{ marginTop: '30px', textAlign: 'right', borderTop: '2px solid #eee', paddingTop: '10px' }}> 
            <h3>Total Price:{totalPrice}ETB</h3>
            <button style={{ 
          background: '#2ecc71', color: 'white', border: 'none', 
          padding: '12px 25px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' 
        }}>Checkout</button>
            </div>
        </div>
        )
    )
}export default Cart;