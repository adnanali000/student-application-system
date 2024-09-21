import {Navigate} from 'react-router-dom'

const isValidUser = ()=>{
    return localStorage.getItem('token') != null
}

const PrivateRoute = ({element})=>{
    return isValidUser() ? element : <Navigate to="/login" />
}

export default PrivateRoute