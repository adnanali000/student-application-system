import logo from '../assets/logo.png'
import githubLogo from '../assets/github-mark.png'

export default function Navbar() {
    return (
        <div className='w-full flex items-center border-b justify-between px-8 py-2'>
            <div>
                <img src={logo} className='w-40 h-12' />
            </div>
            <a className='flex items-center space-x-2 hover:underline cursor-pointer text-sm' href='https://github.com/adnanali000/student-application-system.git' target='_blank'>
                <div>
                    <img src={githubLogo} className='w-6 h-6' />
                </div>
                <div>
                    View Code
                </div>
            </a>
        </div>
    )
}
