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
        <div className="flex justify-center">
            <div id="new-goal-modal-bg" className="h-screen w-screen fixed pin z-40 overflow-auto bg-smoke-dark flex">
            </div>
            <section className="z-50 fixed bg-off-white flex flex-col w-2/3 h-56 my-40 flex justify-center">
            <h1 className="">Add New Goal</h1>
                <form className="flex flex-col w-72">
                    <label >Goal Name:</label>
                    <input id="goal-title" type="text" name="goal-title" placeholder="e.g. Finish my designs" />
                    <label>Complete By:</label>
                    <input id="date-to-complete" type="date" name="date-completed" placeholder="e.g. Date to be completed"/>
                </form>
            </section>
        </div>
     );
}
 
export default AddGoal;