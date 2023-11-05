import * as React from 'react';
import { useState, useEffect } from 'react';


const DailyTip = () => {
    
    useEffect(()=> {
        document.getElementById('dismiss-tip')?.addEventListener('click', () => {
            const tipContainer = document.getElementById('daily-tip-container')
            tipContainer!.className = 'hidden'
        });
        
    }, [])
    
    return ( 
        <div id='daily-tip-container' className='bg-lime rounded-3xl mx-5 px-8 py-3 drop-shadow-lg mb-5 md:mx-16 xl:mx-24'>
            <p className='text-based'>Daily Tip</p>
            <p className='text-2xl font-bold'>Practice Caring for Yourself</p>
            <p className='text-2xl'>Self-care goals can help you practice caring for yourself during difficult times. They can also help you feel more confident, make better decisions, and build stronger relationships.</p>
            <p id='dismiss-tip' className='text-sea-green-blue underline w-16'>Dismiss</p>
        </div>
     );
}
 
export default DailyTip;