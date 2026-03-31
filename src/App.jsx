import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import {AuthProvider} from './context/AuthContext';
import AddProduct from './pages/AddProduct';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
function App(){
  return(
    <Router>
    <AuthProvider>
    <CartProvider>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/cart" element={
          <ProtectedRoute>
          <Cart />
          </ProtectedRoute>
          }>
          </Route>
          <Route path="/addproduct" element={<AddProduct />} ></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/changepassword" element={<ChangePassword/>}></Route>
        </Routes>
        <Footer /> 
    </CartProvider>
    </AuthProvider>
    </Router>
  )
}
export default App;