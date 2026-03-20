import {useParams} from 'react-router-dom';
import {products} from '../data/products';
import { useCart } from '../context/CartContext';
function ProductDetail(){
    const {id}=useParams();
    const {addToCart} = useCart();
    const product =products.find((p)=>p.id===parseInt(id));
    return(
        !product ?(<h1>Sorry : Product can't find</h1>):(
            <div style={{ padding: '40px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <img src={product.image} alt={product.name} style={{ width: '400px', borderRadius: '15px' }} />
                <div style={{flex:1,minwidth:'300px'}}>
                    <h1 style={{fontSize:'2.5rem'}}>{product.name}</h1>
                    <p style={{ color: '#7f8c8d',fontSize:'1.2rem',margin: '20px 0'}}>{product.description}</p>
                    <h2 style={{ color: '#2ecc71' }}>Price: {product.price}</h2>
                </div>
                <div>
                    <button onClick={()=>addToCart(product)} style={{padding:'15px 30px',background: '#2ecc71',color:'white',border: 'none', borderRadius: '8px',fontSize: '1.1rem',curser:'pointer', cursor: 'pointer'}}>Add To Cart</button>
                </div>
            </div>
        )
    )
}export default ProductDetail;