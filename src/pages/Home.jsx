import { products } from '../data/products'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
function Home() {
    const { addToCart } = useCart();
    return (
        <div style={{ padding: '20px' }}>
            <h1>Selected Product</h1>
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px', marginTop: '20px'
            }}>
                {
                    products && products.map((product) => (
                        <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
                                <h3>{product.name}</h3>
                            </Link>
                            <p style={{ color: '#27ae60', fontWeight: 'bold' }}>{product.price}ETB</p>
                            <button style={{
                                width: '100%', padding: '10px', background: '#2ecc71',
                                color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'
                            }} onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;