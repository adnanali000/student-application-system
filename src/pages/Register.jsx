import React, { useState } from 'react'
import { CustomInput, CustomButton, AuthLayout, Linking, FormHeader } from '../components'
import { EmptySpaceRegix, EmailRegex } from '../utils/regix';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../assets/user.svg'
import closeEyeIcon from '../assets/closeEye.svg'
import openEyeIcon from '../assets/openEye.svg'
import EmailIcon from '../assets/email.svg'

const Register = () => {
  const [userInput, setUserInput] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleRegister = () => {
    let updateError = {}

    if (EmptySpaceRegix.test(userInput.firstName)) {
      updateError.firstName = "First name is required"
    }

    if (EmptySpaceRegix.test(userInput.lastName)) {
      updateError.lastName = "Last name is required"
    }

    if (EmptySpaceRegix.test(userInput.email)) {
      updateError.email = "Email is required"
    } else if (!EmailRegex.test(userInput.email)) {
      updateError.email = "Please enter a valid email"
    }

    if (EmptySpaceRegix.test(userInput.password)) {
      updateError.password = "Password is required"
    } else if (userInput.password?.length < 6) {
      updateError.password = "Password must be atleast 6 characters long"
    }

    if (EmptySpaceRegix.test(userInput.confirmPassword)) {
      updateError.confirmPassword = "Please confirm your password"
    } else if (userInput.password !== userInput.confirmPassword) {
      updateError.confirmPassword = "Password do not match"
    }

    if (Object.keys(updateError)?.length > 0) {
      setError(updateError)
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      localStorage.setItem('token', 'hellotest123!@#')
      navigate('/')
    }, 2000);

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
      handleRegister();
    }
  };

  const handleLink = () => {
    navigate('/login')
  }

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev)
  }


  return (
    <AuthLayout>
      <FormHeader message="It's quick and easy!" heading="Create a new account" />
      <CustomInput label="First Name" icon={UserIcon} name="firstName" type="text" onKeyDown={handleKeyDown} value={userInput.firstName} onChange={handleInputChange} error={error?.firstName} placeholder="Enter your first name" />
      <CustomInput label="Last Name" icon={UserIcon} name="lastName" type="text" onKeyDown={handleKeyDown} value={userInput.lastName} onChange={handleInputChange} error={error?.lastName} placeholder="Enter your last name" />
      <CustomInput label="Email" icon={EmailIcon} name="email" type="email" onKeyDown={handleKeyDown} value={userInput.email} onChange={handleInputChange} error={error?.email} placeholder="Enter your email" />
      <CustomInput label="Password" icon={showPassword ? openEyeIcon : closeEyeIcon} handleIconClick={togglePassword} name="password" type={showPassword ? "text" : "password"} value={userInput.password} onKeyDown={handleKeyDown} onChange={handleInputChange} error={error?.password} placeholder="Enter your password" />
      <CustomInput label="Confirm Password" icon={showConfirmPassword ? openEyeIcon : closeEyeIcon} handleIconClick={toggleConfirmPassword} name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={userInput.confirmPassword} onKeyDown={handleKeyDown} onChange={handleInputChange} error={error?.confirmPassword} placeholder="Enter your confirm password" />
      <CustomButton text='Register' loading={loading} handleClick={handleRegister} />
      <Linking label="Already have an account?" link="Login" handleLink={handleLink} />
    </AuthLayout>
  );
};

export default Register;
