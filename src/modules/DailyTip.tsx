
import { useState } from 'react';


const DailyTip = () => {
    const [isHidden, setIsHidden] = useState(false);

    return ( 
        <>
        { isHidden ? <p className='mx-5 md:mx-16 xl:mx-24 text-sea-green-blue underline cursor-pointer' onClick={() => {setIsHidden(false)}}>View Daily Tip</p> : 
        <div id='daily-tip-container' className='bg-lime rounded-3xl mx-5 px-8 py-3 drop-shadow-lg mb-5 md:mx-16 xl:mx-24'>
            <p className='text-based'>Daily Tip</p>
            <p className='text-2xl font-bold'>Practice Caring for Yourself</p>
            <p className='text-2xl'>Self-care goals can help you practice caring for yourself during difficult times. They can also help you feel more confident, make better decisions, and build stronger relationships.</p>
            <p id='dismiss-tip' className='text-sea-green-blue underline w-16 cursor-pointer' onClick={() => {setIsHidden(true)}}>Dismiss</p>
        </div>}
        
        </>

     );
}
 
export default DailyTip;