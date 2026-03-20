import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
function ProtectedRoute({children}){
    const{User} =useAuth();
    if(!User){
        return <Navigate to="/login" replace />
    }
    return children;
}export default ProtectedRoute; 