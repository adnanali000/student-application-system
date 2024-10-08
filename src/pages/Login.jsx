import React, { useState } from 'react'
import { CustomInput, CustomButton, AuthLayout, Linking, FormHeader } from '../components'
import { EmptySpaceRegix } from '../utils/regix';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '../assets/email.svg'
import closeEyeIcon from '../assets/closeEye.svg'
import openEyeIcon from '../assets/openEye.svg'

const Login = () => {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const [error, setError] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const dummyUser = { email: 'test@gmail.com', password: 'test123' }
  const navigate = useNavigate()

  const handleLogin = () => {
    let updateError = {};
    if (EmptySpaceRegix.test(userInput.email)) {
      updateError.email = 'Email is required'
    }
    if (EmptySpaceRegix.test(userInput.password)) {
      updateError.password = 'Password is required'
    }

    if (Object.keys(updateError)?.length > 0) {
      setError(updateError)
      return
    }


    if (userInput.email === dummyUser.email && userInput.password === dummyUser.password) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        localStorage.setItem('token', 'hellotest123!@#')
        navigate('/')
      }, 2000);
    } else {
      if (userInput.email !== dummyUser.email) {
        updateError.email = 'Invalid email. Please use test@gmail.com'
      }
      if (userInput.password !== dummyUser.password) {
        updateError.password = 'Invalid password. Please use test123'
      }
    }

    setError(updateError)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInput((prev) => ({ ...prev, [name]: value }))
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: '' }))
    }
  }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLink = () => {
    navigate('/register')
  }

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }


  return (
    <AuthLayout>
      <FormHeader message="Welcome back! 👋" heading="Login to your account" />
      <CustomInput label="Email" name="email" icon={EmailIcon} type="email" onKeyDown={handleKeyDown} value={userInput.email} onChange={handleInputChange} error={error.email} placeholder="Enter your email" />
      <CustomInput label="Password" name="password" handleIconClick={togglePassword} icon={showPassword ? openEyeIcon : closeEyeIcon} type={showPassword ? "text" : "password"} value={userInput.password} onKeyDown={handleKeyDown} onChange={handleInputChange} error={error.password} placeholder="Enter your password" />
      <CustomButton text='Login' loading={loading} handleClick={handleLogin} />
      <Linking label="Don't have an account?" link="Register" handleLink={handleLink} />
    </AuthLayout>
  );
};

export default Login;
