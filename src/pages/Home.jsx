import { products } from '../data/products'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ArrowRight,Leaf,ShieldCheck,Truck} from 'lucide-react';
function Home() {
    const { addToCart } = useCart();
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        const existingProducts = JSON.parse(localStorage.getItem("my_products"));
        if (existingProducts) {
            setAllProducts([...products, ...existingProducts]);
        }
    }, []);
    return (
        <div style={{ padding: '20px',background:'#B0FFFA' }}>
            <div style={styles.hero}>
            <div style={styles.heroContent}>
                <h1 style={styles.heroTitle}>Green Shop</h1>  
                <h2 style={styles.heroSubtitle}>Your One-Stop Shop for Everything!</h2>
                <p style={{marginBottom: '25px',fontSize: '1.1rem'}}>Discover top-quality Electronics, Home essentials, and Cars all in one place. 
            Experience the best deals today!</p> 
           <button style={styles.primaryBtn} onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}>Shop Now<ArrowRight size={20} /></button> 
            </div>
            <div style={styles.heroImageContainer}>
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="Featured Products" style={styles.heroImg} />
            </div>
            </div>
            <div style={styles.featuresSection}>
                <div style={styles.featureItem}><Truck color="#2ecc71"/><span>Fast Delivery</span></div>
                <div style={styles.featureItem}><ShieldCheck /><span>Secure Payment</span></div>
                <div style={styles.featureItem}><Leaf /><span>Quality Products</span></div>
            </div>
            {/* <h1>Selected Product</h1>
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px', marginTop: '20px'
            }} id="products-section">
                {
                    allProducts && allProducts.map((product) => (
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
            </div> */}
            <div style={{ padding: '40px 20px' }} id="products-section">
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>የተመረጡ ምርቶች</h2>
                <div style={styles.productGrid}>
                    {allProducts && allProducts.map((product) => (
                        <div key={product.id} style={styles.productCard}>
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                                <div style={styles.imageWrapper}>
                                    <img src={product.image} alt={product.name} style={styles.productImg} />
                                </div>
                                <h3 style={{fontSize: '1.1rem', margin: '10px 0'}}>{product.name}</h3>
                            </Link>
                            <p style={{ color: '#2ecc71', fontWeight: 'bold', fontSize: '1.2rem' }}>{product.price} ETB</p>
                            <button style={styles.addToCartBtn} onClick={() => addToCart(product)}>
                                ወደ ካርት ጨምር
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
const styles = {
    hero:{display:'flex',justifyContent: 'space-between',alignItems: 'center',padding: '60px 5%',background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',color: 'white',
        minHeight: '400px',flexWrap: 'wrap',borderRadius: '12px'},
        heroContent:{flex: '1',minWidth: '300px', paddingRight: '20px',borderRadius: '12px'},
        heroTitle:{fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px'},
        heroSubtitle:{fontSize: '3rem', fontWeight: '800', marginBottom: '20px',lineHeight: '1.2'},
        heroImageContainer:{flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center'},
        heroImg: { width: '100%', maxWidth: '500px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' },
        primaryBtn: { 
        display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px', 
        fontSize: '1.1rem', background: 'white', color: '#27ae60', border: 'none', 
        borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' 
    },
    featuresSection:{display: 'flex', justifyContent: 'space-around', padding: '30px', 
        background: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', flexWrap: 'wrap', gap: '20px'},
        featureItem:{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#555'},
        productGrid: {
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px', maxWidth: '1200px', margin: '0 auto'
    },
    productCard: { 
        background: 'white', borderRadius: '15px', padding: '15px', 
        textAlign: 'center', transition: '0.3s', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' 
    },
    imageWrapper: { overflow: 'hidden', borderRadius: '12px', marginBottom: '10px' },
    productImg: { width: '100%', height: '200px', objectFit: 'cover', transition: '0.5s' },
    addToCartBtn: {
        width: '100%', padding: '12px', background: '#2ecc71',
        color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px'
    }

}
export default Home;