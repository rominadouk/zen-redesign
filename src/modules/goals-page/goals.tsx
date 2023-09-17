import * as React from 'react';
import { useState, useEffect} from 'react';
import {ReactComponent as GoalIcon} from '../../assets/flag-icon.svg'
import {ReactComponent as AddIcon} from '../../assets/add-icon.svg'
import NewGoal from './new-goal'
import axios from 'axios';

const Goals = () => {
    type Goal = {
        _id: string,
        title: string,
        toBeCompletedBy: string,
        isCompleted: boolean
        
    }

    const [allGoals, setAllGoals] = useState([] as Goal[])
    const [incompletedGoals, setIncompletedGoals] = useState([] as Goal[])
    
    const getGoals = () => {
        axios.get('http://localhost:4000/goals').then((response)=> {
            setAllGoals(response.data)
            console.log(allGoals)

            const incompleted = allGoals.filter((goal: Goal) => !goal.isCompleted);
            setIncompletedGoals(incompleted)
            console.log(incompletedGoals)
        })
    };

    useEffect(()=> {
        getGoals();

    },[]);



    return (
        <div className='font-archivo'>
            <section id='goals-top' className='flex flex-row mt-12 mb-4 justify-around'>
                <div className='flex flex-row'>
                    <GoalIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-4 font-bold'>Goals</h1>
                </div>
                <button id='add-goal-button' className='flex bg-sea-green-blue rounded-md px-3'>
                    <p className='text-off-white self-center py-2 '>Add New</p>
                    <AddIcon className='text-off-white h-7 w-7 self-center ml-1'/>
                </button>
            </section>
            <div className='bg-lime rounded-3xl mx-4 px-8 py-3 drop-shadow-lg'>
                <p className='text-based'>Daily Tip</p>
                <p className='text-2xl font-bold'>Practice Caring for Yourself</p>
                <p className='text-2xl'>Self-care goals can help you practice caring for yourself during difficult times. They can also help you feel more confident, make better decisions, and build stronger relationships.</p>
                <p className='text-sea-green-blue underline'>Dismiss</p>
            </div>
            {incompletedGoals.map((incompleteGoal)=> {
                const date = new Date(incompleteGoal.toBeCompletedBy);
                const formattedDate = date.toLocaleDateString('en-US', {
                    month:'short',
                    day:'numeric',
                    year:'numeric'
                })

                return (
                    <div className='goal-entry flex flex-col' key={incompleteGoal._id}>
                        <div className='flex flex-row'>
                            <input type='checkbox' name="isCompleted"/>
                            <p>{incompleteGoal.title}</p>
                        </div>
                        <p className=''>{formattedDate}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Goals;