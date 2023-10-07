import DailyTip from "../DailyTip";
import { ReactComponent as SelfCareIcon } from '../../assets/selfcare-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { useNavigate } from "react-router-dom";
import SelfCareDropdown from "./self-care-dropdown";
import FeelingsDropdown from "./feelings-dropdown";

const SelfCare = () => {
    const navigate = useNavigate();

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
                        <SelfCareDropdown />
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
                        <FeelingsDropdown />
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