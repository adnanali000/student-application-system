import logo from '../assets/logo.png'
import githubLogo from '../assets/github-mark.png'
import logout from '../assets/logout.svg'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login')

    }

    return (
        <div className='w-full flex items-center border-b justify-between px-8 py-2'>
            <div>
                <img src={logo} className='w-40 h-12' />
            </div>
            <div className='flex items-center space-x-2'>
            <a className='flex hover:bg-gray-200 p-1.5 rounded-full items-center space-x-2 hover:underline cursor-pointer text-sm' href='https://github.com/adnanali000/student-application-system.git' target='_blank'>
                <div title="View code">
                    <img src={githubLogo} className='w-6 h-6' />
                </div>
            </a>
            <div onClick={handleLogout} title="Logout" className='p-1 hover:bg-gray-200 rounded-full cursor-pointer'>
                <img src={logout} />
            </div>
            </div>
        </div>
    )
}
