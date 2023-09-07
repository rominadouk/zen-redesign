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
                        <h1 className='flex flex-column justify-center text-3xl font-header basis-full my-3 text-4xl'>zen</h1>
                    {/* <h1 className='flex flex-column justify-center text-3xl font-header'>zen</h1> */}
                    <ul id="mobile-nav-ul" className='flex flex-row space-x-12 pb-3'>
                        <li className='h-8 w-8'><SelfCareIcon/></li>
                        <li className='h-8 w-8'> <JournalIcon /></li>
                        <li className='h-8 w-8'> <GoalIcon /> </li>
                        <li className='h-8 w-8'><HabitIcon/> </li>
                    </ul>
            </nav>

            <nav id="desktop-navbar" className="hidden md:flex bg-light-brown flex-row h-16 justify-between">
                {/* Desktop Navbar */}
                <h1 className='basis-1/6 font-header text-5xl place-self-center text-center'>zen</h1>
                <ul id="desktop-nav-ul" className="flex text-xl space-x-12 place-self-center text-center">
                    <li className=''>Self-Care</li>
                    <li className=''>Journal</li>
                    <li className=''>Goals</li>
                    <li className=''>Habits</li>
                </ul>
                <section id="user-greeting" className='grow place-self-center justify-self-end text-right pr-4'>              
                    <p className='text-l'>You got this, User</p>
                    {/* Insert avatar here */}
                    <p className='text-l'>Logout</p>
                </section>
            </nav>



        </div>
     );
}
 
export default Navbar;