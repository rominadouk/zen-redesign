import * as React from 'react';
import {ReactComponent as JournalIcon} from '../assets/journal-icon.svg'
import {ReactComponent as GoalIcon} from '../assets/flag-icon.svg'
import {ReactComponent as HabitIcon} from '../assets/habits-icon.svg'
import {ReactComponent as SelfCareIcon} from '../assets/selfcare-icon.svg'



const Navbar = () => {
    return ( 
        <div>

            <nav className="flex flex-row justify-center">
                <div id="mobile-navbar" className='lg:hidden'>
                    {/* Mobile Navbar */}
                    <h1 className='flex flex-column justify-center'>Zen</h1>
                    <ul id="mobile-nav-ul" className='flex flex-row'>
                        <li><SelfCareIcon/></li>
                        <li> <JournalIcon /> </li>
                        <li> <GoalIcon /> </li>
                        <li><HabitIcon/> </li>
                    </ul>
                </div>

                <div id="desktop-navbar" className='hidden lg:block'>
                    {/* Desktop Navbar */}
                    <h1>Zen</h1>
                    <ul id="desktop-nav" className="flex-row">
                        <li>Journal</li>
                        <li>Goals</li>
                        <li>Habits</li>
                        <li>User</li>
                    </ul>
                    <p className='hidden lg:block'>You got this, User</p>
                    {/* Insert avatar here */}
                    <p className='hidden lg:block'>Logout</p>
                </div>

            </nav>

        </div>
     );
}
 
export default Navbar;