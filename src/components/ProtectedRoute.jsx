import {Navigate,useLocation} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
function ProtectedRoute({children}){
    const{User} =useAuth();
    const location =useLocation();
    if(!User){
        return <Navigate to="/login" state={{from:location}} replace />
    }
    return children;
}export default ProtectedRoute; 