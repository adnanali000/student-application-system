import {Routes,Route,Navigate} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { Login,Register,Home } from '../pages'

const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute element={<Home />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes