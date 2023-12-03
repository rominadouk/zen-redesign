import * as React from 'react';
import {ReactComponent as JournalIcon} from '../assets/journal-icon.svg'
import {ReactComponent as GoalIcon} from '../assets/flag-icon.svg'
import {ReactComponent as HabitIcon} from '../assets/habits-icon.svg'
import {ReactComponent as SelfCareIcon} from '../assets/selfcare-icon.svg'
import { ReactComponent as HomeIcon } from '../assets/house-icon.svg';
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as AvatarIcon } from '../assets/person-icon.svg'
import { ReactComponent as ProfileIcon } from '../assets/profile-icon.svg'
import { AuthContext } from './authentication/AuthContext';
import { useContext } from 'react';



const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate()


    return ( 
        <div className='z-50'>
            <nav id='mobile-navbar' className='flex flex-row justify-center bg-light-brown lg:justify-start md:hidden flex-wrap'>
                    {/* Mobile Navbar */}
                        <h1 className='flex flex-column justify-center text-3xl font-brand basis-full my-3 text-4xl'>zen</h1>
                    {/* <h1 className='flex flex-column justify-center text-3xl font-header'>zen</h1> */}
                    <ul id="mobile-nav-ul" className='flex flex-row space-x-12 pb-2'>
                        <Link to='/'>
                            <li className='h-8 w-8'><HomeIcon/></li>
                        </Link>
                        <Link to={isAuthenticated ? '/selfcare' : '/login'}>
                            <li className='h-8 w-8'><SelfCareIcon/></li>
                        </Link>
                        <Link to={isAuthenticated ? '/journals' : '/login'}>
                            <li className='h-8 w-8'> <JournalIcon /></li>
                        </Link>
                        <Link to={isAuthenticated ? '/goals' : '/login'}>
                            <li className='h-8 w-8'> <GoalIcon /> </li>
                        </Link>
                        {isAuthenticated && (
                            <Link to='/settings'>
                                <li className='h-8 w-8'> <ProfileIcon/> </li>
                            </Link>
                        )}

                        {/* <li className='h-8 w-8'><HabitIcon/> </li> */}
                    </ul>
            </nav>

            <nav id='desktop-navbar' className="hidden md:flex bg-light-brown flex-row h-16 justify-between">
                {/* Desktop Navbar */}
                <h1 className='basis-1/6 font-brand text-5xl place-self-center text-center'>zen</h1>
                <ul id='desktop-nav-ul' className='flex text-xl space-x-12 place-self-center text-center'>
                    <Link to='/'>
                        <li className='hover:text-sea-green-blue'>Home</li>
                    </Link>
                    <Link to={isAuthenticated ? '/selfcare' : '/login'}>
                        <li className='hover:text-sea-green-blue'>Self-Care</li>
                    </Link>
                    <Link to={isAuthenticated ? '/journals' : '/login'}>
                        <li className='hover:text-sea-green-blue'>Journal</li>
                    </Link>

                    <Link to={isAuthenticated ? '/goals' : '/login'}>
                        <li className='hover:text-sea-green-blue'>Goals</li>
                    </Link>
                    {/* <li className='hover:text-sea-green-blue'>Habits</li> */}
                </ul>
                <section id="user-greeting" className='flex flex-row justify-end grow place-self-center justify-self-end text-right md:pr-11 lg:pr-[70px]'>
                {isAuthenticated && (
                    <>
                        <div className='flex flex-col'>
                            <p className='text-l place-self-center'>You got this!</p>
                            <p className='text-l hover:text-sea-green-blue hover:underline logout cursor-pointer' onClick={logout}>Logout</p>
                        </div>
                        {/* Insert avatar here */}
                        <div id='avatar' className='flex bg-off-white rounded-full h-12 w-12 place-self-center ml-4 justify-center'> 
                            <AvatarIcon className='self-center h-8 w-8 text-smoke-light'/> 
                        </div>
                    </>
                )}
                {!isAuthenticated && (
                    <div className='flex gap-2'>
                        <p className='cursor-pointer hover:text-sea-green-blue hover:underline' onClick={() => {navigate('/login')}}>Login</p>
                        <p>or</p>
                        <p className='cursor-pointer hover:text-sea-green-blue hover:underline' onClick={() => {navigate('/register')}}>Register</p>
                    </div>
                )}
                </section>
            </nav>
        </div>
     );
}
 
export default Navbar;