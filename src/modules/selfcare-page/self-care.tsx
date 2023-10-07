import DailyTip from "../DailyTip";
import { ReactComponent as SelfCareIcon } from '../../assets/selfcare-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { useNavigate } from "react-router-dom";
import SelfCareDropdown from "./self-care-dropdown";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const SelfCare = () => {

    const navigate = useNavigate();
    const [selectedFeeling, setSelectedFeeling] = useState('Choose One');
    const [selectedSelfCare, setSelectedSelfCare] = useState('Choose one')

    return ( 
        <div className='font-archivo'>
            {/* SELF-CARE HEADER */}
            <div className='flex flex-row mt-12 mb-4 mx-5 md:mx-16 justify-between xl:mx-24'>
                <div className='flex flex-row'>
                    <SelfCareIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-2 font-bold'>Self-Care</h1>
                </div>
            </div>
            <DailyTip />

            <div className="lg:flex lg:flex-row ">
                {/* SECTION 1 - LEFT ON DESKTOP*/}
                <section>
                    {/* DAILY CHALLENGE SECTION */}
                    <div className="mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-16 lg:mr-0">
                        <p className='font-bold text-based mt-2 mb-3'>Daily Challenge</p>
                        <h2 className='text-2xl font-bold mb-1'>Have some alone time.</h2>
                        <p>For many, alone time is a great opportunity for self-reflection and self-discovery. It can also rejuvenate you by balancing your emotions and letting your body physically relax. Not only does this practice help improve your well-being, but it can also improve your relationships with others.</p>
                    </div>
                    {/* I Want To.. Dropdown */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 drop-shadow-xl bg-pure-white lg:h-80 md:mx-16 lg:ml-16 lg:mr-0'>
                        <p>I want to...</p>
                        {/* <SelfCareDropdown /> */}
                        <div>
                            <Menu as="div" className="relative inline-block text-left">
                            <div className='relative flex flex-col w-60 lg:w-96'>
                                <Menu.Button className="inline-flex  gap-x-1.5 rounded-md bg-white pl-3 lg:w-96 py-2 pl-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50">{selectedSelfCare}
                                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="relative left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className='py-1 bg-pure-white'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none')} onClick={() => { setSelectedSelfCare('exercise')}}>exercise</li>
                                        )}
                                    </Menu.Item>
                                    {/* Improve my Skin Care Item */}
                                    <Menu.Item>
                                        {({ active }) => (
                                            <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none')} onClick={() => { setSelectedSelfCare('skincare')}}>improve my skincare</li>
                                        )}
                                    </Menu.Item>
                                    {/* Laugh Item */}
                                    <Menu.Item>
                                    {({ active }) => (
                                        <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none')} onClick={() => { setSelectedSelfCare('laugh')}}>laugh</li>
                                    )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none')} onClick={() => { setSelectedSelfCare('social')}}>be social</li>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>

                        </div>
                    </div>
                </section>

                {/* SECTION 2 - RIGHT ON DESKTOP*/}
                <section>
                    {/* STREAK DIV */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p className="font-bold">You're on a streak</p>
                        <h3 className="text-4xl font-bold text-sea-green-blue">3 days in a row</h3>
                        <p>Congratulations!</p>
                    </div>
                    {/* Goals Completed Div */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3  drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p className='font-bold'>You achieved</p>
                        <h3 className='text-4xl font-bold text-sea-green-blue'>12 goals!</h3>
                        <p>since you started! You're awesome! <a href='/goals' className='text-sea-green-blue underline'>Go to Goals.</a></p>
                    </div>
                    {/* Habits Completed Div */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3  drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p className='font-bold'>You completed</p>
                        <h3 className='text-4xl font-bold text-sea-green-blue'>2 of 12 habits</h3>
                        <p>Consistency is key! <a href='/habits' className='text-sea-green-blue underline'>Go to Habits.</a></p>
                    </div>
                    {/* Today I feel Div */}
                    <div className='flex flex-col mx-5 px-8 pt-3 pb-8 mb-4  lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p>Today I feel...</p>
                        {/*Feelings Dropdown START */}
                        <div>
                            <Menu as="div" className="relative inline-block text-left">
                            <div className='flex flex-col w-60 lg:w-96'>
                                <Menu.Button className="inline-flex gap-x-1.5 rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50">{selectedFeeling}
                                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute left-0  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1 bg-pure-white">
                                            <Menu.Item>
                                            {({ active }) => (
                                                    <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none')} onClick={() => { setSelectedFeeling('Happy')}}>Happy</li>
                                                )}

                                                {/* {({ active }) => (
                                                    <a href="#" className={( active ? 'bg-pure-white text-gray-900' :'text-gray-700 block px-4 py-2 text-sm'
                                                )}>Happy</a>
                                                )} */}
                                            </Menu.Item>
                                            {/* Improve my Skin Care Item */}
                                            <Menu.Item>
                                                {({ active }) => ( <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none')} onClick={() => { setSelectedFeeling('Sad')}}>Sad</li>
                                                )}
                                            </Menu.Item>
                                            {/* Laugh Item */}
                                            <Menu.Item>
                                            {({ active }) => (
                                                    <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none'
                                                    )} onClick={() => { setSelectedFeeling('Angry')}}>Angry</li>
                                            )}
                                            </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none'
                                                    )} onClick={() => { setSelectedFeeling('Happy')}}>Content</li>
                                                    )}
                                                </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        {/* Feelings DropDown END */}
                        <button className='flex bg-sea-green-blue rounded-md px-5 justify-center lg:place-self-center mt-3 w-64' onClick={() => {
                            navigate('/journal')
                        }}>
                            <p className='text-off-white self-center py-2'>Start New Journal Entry</p>
                            <AddIcon className='text-off-white h-7 w-7 self-center ml-1'/>
                        </button>
                    </div>
                </section>
            </div>
            {/* SEPARATE COLUMNS ON DESKTOP - END */}
            
        </div>
     );
}
 
export default SelfCare;