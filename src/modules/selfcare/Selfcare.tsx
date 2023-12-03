import DailyTip from "../DailyTip";
import { ReactComponent as SelfCareIcon } from '../../assets/selfcare-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { useNavigate, Link } from "react-router-dom";
import  Select  from 'react-select'
import { useState } from 'react'
import Skincare from "./skincare-tips";
// import Exercise from "./exercise";
import Joke from "./jokes";
import Social from "./social";

const SelfCare = () => {

    const navigate = useNavigate();
    // const [selectedFeeling, setSelectedFeeling] = useState('Choose One');
    const [selectedSelfCare, setSelectedSelfCare] = useState('Choose one');


    interface OptionType {
        value: string;
        label: string;
    }
    
    const handleSelfCareSelectChange = (selectedOption: OptionType | null) => {
        if (selectedOption) {
            setSelectedSelfCare(selectedOption.value);
        } else {
            // Handle the case where no option is selected (e.g., the user clears the selection)
            setSelectedSelfCare('');
        }
    };
    const selfcareOptions: OptionType[] = [
        { value: 'skincare', label: 'improve my skincare' },
        { value: 'laugh', label: 'laugh' },
        { value: 'social', label: 'be social' },
    ];
    
    const feelingOptions: OptionType[] = [
        { value: 'happy', label: 'happy' },
        { value: 'sad', label: 'sad' },
        { value: 'frustrated', label: 'frustrated' },
    ];

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

            <div className="lg:flex lg:flex-row xl:mx-8 w-screen">
                {/* SECTION 1 - LEFT ON DESKTOP*/}
                <section>
                    {/* DAILY CHALLENGE SECTION */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-16 lg:mr-0'>
                        <p className='font-bold text-based mt-2 mb-3'>Daily Challenge</p>
                        <h2 className='text-2xl font-bold mb-1'>Have some alone time.</h2>
                        <p>For many, alone time is a great opportunity for self-reflection and self-discovery. It can also rejuvenate you by balancing your emotions and letting your body physically relax. Not only does this practice help improve your well-being, but it can also improve your relationships with others.</p>
                    </div>
                    {/* I Want To.. Dropdown */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 drop-shadow-xl bg-pure-white lg:h-80 md:mx-16 lg:ml-16 lg:mr-0' style={{ position: 'relative', zIndex: 2 }}>
                        {/* ALT DROP DOWN */}
                        <p>I want to...</p>
                        <Select
                            options={selfcareOptions}
                            onChange={handleSelfCareSelectChange}
                            className="text-sm font-semibold lg:w-72"
                            styles={{
                                control: (styles:any) => ({
                                    ...styles,
                                    backgroundColor: 'white',
                                    borderRadius: '0.375rem', // Tailwind .rounded-md
                                    padding: '1px', // Tailwind py-2 px-2
                                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Tailwind shadow-sm
                                    borderColor: 'rgba(0, 0, 0, 0.6)', // Tailwind ring-1 ring-inset ring-black
                                }),
                                // You can add more custom styles if needed
                            }}
                        />
                        <div>
                            {selectedSelfCare === 'skincare' && <Skincare />}
                            {/* {selectedSelfCare === 'exercise' && <Exercise />} */}
                            {selectedSelfCare === 'laugh' && <Joke />}
                            {selectedSelfCare === 'social' && <Social />}
                        </div>
                    </div>
                    {/* Selfcare dropdown END */}

                </section>
                {/* SECTION 2 - RIGHT ON DESKTOP*/}
                <section>
                    {/* STREAK DIV */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 z-0 lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p className="font-bold">You're on a streak</p>
                        <h3 className="text-4xl font-bold text-sea-green-blue">3 days in a row</h3>
                        <p>Congratulations!</p>
                    </div>
                    {/* Goals Completed Div */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3  drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p className='font-bold'>You achieved</p>
                        <h3 className='text-4xl font-bold text-sea-green-blue'>12 goals!</h3>
                        <p>since you started! You're awesome!</p>
                        <Link to='/goals'><p className='text-sea-green-blue underline'>Go to Goals. </p></Link>


                    </div>
                    {/* Habits Completed Div */}
                    <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3  drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        <p className='font-bold'>You completed</p>
                        <h3 className='text-4xl font-bold text-sea-green-blue'>2 of 12 habits</h3>
                        <p>Consistency is key!</p>
                        <Link to='/habits'><p className='text-sea-green-blue underline'>Go to Habits. </p></Link>
                    </div>
                    {/* Today I feel Div */}
                    <div className='flex flex-col mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-4'>
                        {/*Feelings Dropdown START */}
                        <div>
                            <p>Today I feel...</p>
                            <Select
                            options={feelingOptions}
                            className="text-sm font-semibold lg:w-72"
                            styles={{
                                control: (styles:any) => ({
                                    ...styles,
                                    backgroundColor: 'white',
                                    borderRadius: '0.375rem', // Tailwind .rounded-md
                                    padding: '1px', // Tailwind py-2 px-2
                                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Tailwind shadow-sm
                                    borderColor: 'rgba(0, 0, 0, 0.6)', // Tailwind ring-1 ring-inset ring-black
                                }),
                                // You can add more custom styles if needed
                            }}
                        />
                        </div>
                        {/* Feelings Dropdown END */}
                        <button className='flex bg-sea-green-blue rounded-md px-5 justify-center lg:place-self-center mt-3 w-64' onClick={() => {
                            navigate('/journals')
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