import * as React from 'react';
import {ReactComponent as JournalIcon} from '../assets/journal-icon.svg'
import {ReactComponent as GoalIcon} from '../assets/flag-icon.svg'
import {ReactComponent as HabitIcon} from '../assets/habits-icon.svg'
import {ReactComponent as SelfCareIcon} from '../assets/selfcare-icon.svg'
// import { Link } from 'react-router-dom'



const Navbar = () => {
    return ( 
        <div>
            <nav id="mobile-navbar" className="flex flex-row justify-center bg-light-brown lg:justify-start md:hidden flex-wrap">
                    {/* Mobile Navbar */}
                        <h1 className='flex flex-column justify-center text-3xl font-header basis-full'>zen</h1>
                    {/* <h1 className='flex flex-column justify-center text-3xl font-header'>zen</h1> */}
                    <ul id="mobile-nav-ul" className='flex flex-row space-x-10'>
                        <li className='h-8 w-8'><SelfCareIcon/></li>
                        <li className='h-8 w-8'> <JournalIcon /></li>
                        <li className='h-8 w-8'> <GoalIcon /> </li>
                        <li className='h-8 w-8'><HabitIcon/> </li>
                    </ul>
            </nav>

            <nav id="desktop-navbar" className="hidden md:block bg-light-brown flex flex-row">
                {/* Desktop Navbar */}
                <h1 className='flex'>Zen</h1>
                <ul id="desktop-nav-ul" className="flex flex-row">
                    <li className=''>Journal</li>
                    <li className=''>Goals</li>
                    <li className=''>Habits</li>
                    <li className=''>User</li>
                </ul>
                <p className=''>You got this, User</p>
                {/* Insert avatar here */}
                <p className=''>Logout</p>
            </nav>



        </div>
     );
}
 
export default Navbar;