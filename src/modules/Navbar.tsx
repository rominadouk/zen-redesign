import * as React from 'react';
import {ReactComponent as JournalIcon} from '../assets/journal-icon.svg'
import {ReactComponent as GoalIcon} from '../assets/flag-icon.svg'
import {ReactComponent as HabitIcon} from '../assets/habits-icon.svg'
import {ReactComponent as SelfCareIcon} from '../assets/selfcare-icon.svg'



const Navbar = () => {
    return ( 
        <div>

            <nav className="flex flex-row justify-center bg-light-brown">
                <div id="mobile-navbar" className='md:hidden'>
                    {/* Mobile Navbar */}
                    <h1 className='flex flex-column justify-center text-3xl font-header'>zen</h1>
                    <ul id="mobile-nav-ul" className='flex flex-row space-x-10'>
                        <li className='h-8 w-8'><SelfCareIcon/></li>
                        <li className='h-8 w-8'> <JournalIcon /></li>
                        <li className='h-8 w-8'> <GoalIcon /> </li>
                        <li className='h-8 w-8'><HabitIcon/> </li>
                    </ul>
                </div>

                <div id="desktop-navbar" className='hidden md:block'>
                    {/* Desktop Navbar */}
                    <h1>Zen</h1>
                    <ul id="desktop-nav" className="flex flex-row">
                        <li className=''>Journal</li>
                        <li className=''>Goals</li>
                        <li className=''>Habits</li>
                        <li className=''>User</li>
                    </ul>
                    <p className='hidden md:block'>You got this, User</p>
                    {/* Insert avatar here */}
                    <p className='hidden md:block'>Logout</p>
                </div>

            </nav>

        </div>
     );
}
 
export default Navbar;