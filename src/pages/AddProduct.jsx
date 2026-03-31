import {useState} from 'react';
const AddProduct=()=>{
    const[product,setproduct]=useState({
        name:'',
        price:'',
        category:'',
        image:null,
        description:''
    });
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setproduct({ ...product, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const existingProducts =JSON.parse(localStorage.getItem("my_products"))||[];
        const newProduct ={...product,id:Date.now()};
        const updatedProducts = [...existingProducts,newProduct]
        localStorage.setItem("my_products",JSON.stringify(updatedProducts));
        alert("Product Registerd Successful!🎉");
         setproduct({ name:'',
        price:'',
        category:'',
        image:null,
        description:''});
    }
        return(
            <div>
                <div>
                    <h2>Provide New Product For Sale</h2>
                    <form onSubmit={handleSubmit}>
                        <label style={styles.label}>Product Name:</label>
                        <input
                        type="text"
                        placeholder="ለምሳሌ፡ ካክተስ"
                        style={styles.input}
                         value={product.name}
                         onChange={(e)=>setproduct({...product,name:e.target.value})} />
                         <label style={styles.label}>Price(ETB)</label>
                         <input 
            type="number" placeholder="0.00" style={styles.input} required
            value={product.price} onChange={(e) => setproduct({...product, price: e.target.value})}
          />
          <label style={styles.label}>Category</label>
          <select style={styles.input} value={product.category} onChange={(e)=>setproduct({...product,category:e.target.value})}>
            <option value="Electronics">Electronics</option>
            <option value="Car">Car</option>
            <option value="House">House</option>
            <option value="Food">Food</option>
          </select>
          <label style={styles.label}>Product Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} required />
          {product.image && <img src={product.image}alt="Preview" style={styles.preview}/>}
          <label style={styles.label}>Description about product:</label>
          <textarea 
            rows="3" placeholder="Write some information about product..." style={styles.input}
            value={product.description} onChange={(e) => setproduct({...product, description: e.target.value})}
          ></textarea>
          <button type="submit" style={styles.button}>Attach Product</button>
                    </form>
                </div>
            </div>
        )
};
const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '40px', backgroundColor: '#f4f7f6', minHeight: '100vh' },
  card: { backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '450px' },
  title: { textAlign: 'center', color: '#2d5a27', marginBottom: '20px', fontFamily: 'Arial' },
  label: { display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555', fontSize: '14px' },
  input: { width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' },
  button: { width: '100%', padding: '15px', backgroundColor: '#2d5a27', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' },
  preview: { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }
};
export default AddProduct;