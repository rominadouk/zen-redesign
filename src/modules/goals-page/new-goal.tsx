import * as React from 'react';
import { useState } from 'react';
import axios from "axios";

const AddGoal = () => {
    let emptyGoal = {
        title: '',
        toBeCompletedBy: new Date(),
        isCompleted: false
    };

    const [newGoal, setNewGoal] = useState(emptyGoal)

    //handles form change of new goal
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setNewGoal((prevGoal)=> ({
            ...prevGoal,
            [name]: type === 'checkbox' ? checked : type === 'date' ? new Date(value) : value
        }))
    };

    //sends new object newGoal to the backend
    const handleCreateGoal = (newGoal: {title:string; toBeCompletedBy: Date; isCompleted: boolean}) => {
        axios.post('http://localhost:4000/goals', newGoal).then((response)=> {
            console.log(response)
        })
    };

    //telling react that type e is a react form element for typescript
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleCreateGoal(newGoal);
    };

    return ( 
        // Modal Wrapper: fill entire viewport & center align content, vertically and horizontally. 
        <div className='flex justify-center'>
            <div id='new-goal-modal-bg' className='h-screen w-screen fixed pin z-40 overflow-auto bg-smoke-dark flex'></div>
            <section className='z-50 fixed flex flex-col my-40 justify-center bg-goal-modal-blue p-2 py-6'>
            <h1 className='text-2xl font-semibold mx-4'>Add New Goal</h1>
                <form className='flex flex-col w-72 my-5 px-4 mx-3'>
                    <label className='text-sm '>Goal Name</label>
                    <input id='goal-title'  className='p-1 rounded-md' type='text' name='title' placeholder='e.g. Finish my designs' />
                    <label className='mt-5 text-sm '>Complete By</label>
                    <input id='date-to-complete' className='p-1 rounded-md' type='date' name='toBeCompletedBy' placeholder='e.g. Date to be completed'/>
                </form>
            <div id='goal-buttons' className='flex flex-row mx-3 justify-around'>
                <button id='cancel-goal-modal' className='flex bg-off-white rounded-md px-4 py-1 align-center'>Cancel</button>
                <button className='flex bg-sea-green-blue text-off-white rounded-md px-4 py-1 align-center'>Save</button>
            </div>
            </section>
        </div>
     );
}
 
export default AddGoal;