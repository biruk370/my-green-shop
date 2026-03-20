import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import {AuthProvider} from './context/AuthContext';
function App(){
  return(
    <AuthProvider>
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/cart" element={
          <ProtectedRoute>
          <Cart />
          </ProtectedRoute>
          }>
          </Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        </Routes> 
    </Router>
    </CartProvider>
    </AuthProvider>
  )
}
export default App;