import * as React from 'react';
import {ReactComponent as GoalIcon} from '../../assets/flag-icon.svg'
import {ReactComponent as AddIcon} from '../../assets/add-icon.svg'

const Goals = () => {
    let tip: string
    let tipFocus: string
    let tipContent: string

    const randomTip = (tips:string[]): String => {
        return tips[Math.floor(Math.random() * tips.length - 1)];
    };

    console.log(randomTip(['hey','you','cool']))

    return ( 
        <div className='font-archivo'>
            <section id='goals-top' className='flex flex-row mt-12 mb-4 justify-around'>
                <div className='flex flex-row'>
                    <GoalIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-4 font-bold'>Goals</h1>
                </div>
                <div className='flex bg-sea-green-blue rounded-md px-3'>
                    <p className='text-off-white self-center py-2 '>Add New</p>
                    <AddIcon className='text-off-white h-7 w-7 self-center'/>
                </div>
            </section>
            <div className='bg-lime rounded-3xl mx-4 font-'>
                <p className='text-based'>Daily Tip</p>
                <p className='text-2xl font-bold'>Practice Caring for Yourself</p>
                <p className='text-2xl'>Self-care goals can help you practice caring for yourself during difficult times. They can also help you feel more confident, make better decisions, and build stronger relationships.</p>
                <p className='text-sea-green-blue underline'>Dismiss</p>
            </div>
            
        </div>
     );
}
 
export default Goals;