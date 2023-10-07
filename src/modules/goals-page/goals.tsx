import * as React from 'react';
import { useState, useEffect} from 'react';
import {ReactComponent as GoalIcon} from '../../assets/flag-icon.svg'
import {ReactComponent as AddIcon} from '../../assets/add-icon.svg'
import {ReactComponent as DeleteIcon} from '../../assets/delete-icon.svg'
import {ReactComponent as EditIcon} from '../../assets/edit-icon.svg'
import { useNavigate } from 'react-router-dom';
import DailyTip from '../DailyTip';
import axios from 'axios';

interface GoalsProps {
    onOpen: () => void; // Define the type of onOpen prop
  }
  

const Goals: React.FC<GoalsProps> = ({onOpen}) => {
    type Goal = {
        _id: string,
        title: string,
        toBeCompletedBy: string,
        isCompleted: boolean
        
    }
    const [displayedPostID, setDisplayedPostID] = useState('');
    const [allGoals, setAllGoals] = useState([] as Goal[]);
    const [incompletedGoals, setIncompletedGoals] = useState([] as Goal[]);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();
    const [editedGoal, setEditedGoal] = useState({
        title: '',
        toBeCompletedBy: ''
    });
    
    //Get goals and filter out incompleted goals to a different array
    const getGoals = async () => {
        try {
            const response = await axios.get('http://localhost:4000/goals')
                setAllGoals(response.data)
                console.log(response.data)
                const incompletedGoals = response.data.filter((goal:Goal)=> !goal.isCompleted);
                setIncompletedGoals(incompletedGoals)
                console.log(incompletedGoals)
        } catch (err) {
            console.log(err)
        }
    };

    // const incompleted = allGoals.filter((goal: Goal) => !goal.isCompleted);
    // setIncompletedGoals(incompleted)
    // console.log(incompletedGoals)


    const handleEditSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleEditUpdate(editedGoal)
    }

    const handleEditUpdate = async (editedGoal: {}) => {
            try {
                const response = await axios.put(`http://localhost:4000/goals/${displayedPostID}`, editedGoal )
                setEditing(false);
                setEditedGoal({
                    title: '',
                    toBeCompletedBy: ''
                });
                navigate('/goals')
            } catch(err) {
                console.log(err)
            }

    };

    //Change the data in the object directly
    const handleEditFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditedGoal({
            ...editedGoal,
            [e.target.name]: e.target.value
        })
    };

    //handle the deletion of Goal
    const handleDeleteGoal = async (incompleteGoal: Goal) => {
        try {
            const response = await axios.delete(`http://localhost:4000/goals/${incompleteGoal._id}`)
            getGoals();
            navigate('/goals')
        } catch(err) {
            console.log(err)
        }
    };

    useEffect(()=> {
        getGoals();
    },[]);



    return (
        <div className='font-archivo'>
            {/* GOALS HEADER */}
            <section id='goals-top' className='flex flex-row mt-12 mb-4 mx-5 md:mx-16 justify-between xl:mx-24'>
                <div className='flex flex-row'>
                    <GoalIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-2 font-bold'>Goals</h1>
                </div>
                {/* ADD GOAL BUTTON */}
                <button id='add-goal-button' className='flex bg-sea-green-blue rounded-md px-3' onClick={onOpen}>
                    <p className='text-off-white self-center py-2'>Add New</p>
                    <AddIcon className='text-off-white h-7 w-7 self-center ml-1'/>
                </button>
            </section>
            {/* DAILY TIP SECTION*/}
            <DailyTip />
            {incompletedGoals.map((incompleteGoal)=> {
                const isDisplayed = incompleteGoal._id === displayedPostID
                const date = new Date(incompleteGoal.toBeCompletedBy);
                const formattedDate = date.toLocaleDateString('en-US', {
                    month:'short',
                    day:'numeric',
                    year:'numeric'
                });

                return (
                    //Individual Goal div's
                    <div className='goal-entry flex flex-col place-content-center bg-light-blue-goals mx-5 my-1 md:h-20 md:mx-16 xl:mx-24' key={incompleteGoal._id} onClick={()=> {
                        setDisplayedPostID(incompleteGoal._id)
                    }}>
                        {editing && isDisplayed ? (
                            // If Editing mode and isDisplayed is true, render editing inputs otherwise render regular data
                            <>
                            <h2>Edit Goal</h2>
                            <form className='flex flex-col items-center lg:flex-row lg:justify-between' onSubmit={handleEditSubmit}>
                                <div className='flex flex-col lg:flex-row mt-5'>
                                    <input className='w-60 lg:mx-4' type='text' name='title' value={editedGoal.title} onChange={handleEditFormChange} />
                                    <input className='w-48' type='date' name='toBeCompletedBy' value={editedGoal.toBeCompletedBy} onChange={handleEditFormChange} />
                                </div>
                                <div className='lg:mr-20'>
                                    <button className='px-3 w-28' onClick={() => {
                                        setEditing(false)
                                    }}>Cancel</button>
                                    <input id='new-goal-submit' type='submit' className='px-3 w-28' value='Update' />
                                </div>
                            </form>
                            </>

                        ): (
                            <>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row'>
                                        <input className='ml-3 mr-2' type='checkbox' name="isCompleted"/>
                                        <p className='text-2xl'>{incompleteGoal.title}</p>
                                    </div>
                                        <p className='text-base place-self-center mr-4'>{formattedDate}</p>
                                </div>
                                {/* BUTTONS CONTAINER */}
                                {isDisplayed ? (
                                    <div className='flex flex-row justify-center'> 
                                    <button className='flex flex-row justify-center bg-darker-red rounded-md px-3 w-22' onClick={(event)=> {
                                        handleDeleteGoal(incompleteGoal)
                                    }}>
                                        <DeleteIcon className='h-6 self-center text-off-white'/>
                                        {/* <p className='self-center text-lg text-off-white'>Delete</p> */}
                                    </button>
                                    {/* When Edit Button clicked, set editing state to true */}
                                    <button className='flex flex-row  justify-center bg-sea-green-blue rounded-md px-3 w-22' onClick={() => {
                                        setEditing(true)
                                    }}>
                                        <EditIcon className='h-6 self-center text-off-white'/>
                                        {/* <p className='self-center text-lg text-off-white'>Edit</p> */}
                                    </button>
                                </div>
                                ) : ''}

                            </>
                        )}
                    </div>
                )
            })} 
        </div>
     );
}
 
export default Goals;