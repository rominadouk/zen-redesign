import axios from "axios";
import React, { useState, useEffect } from 'react';

//this page runs twice because of react strictmode in index.js
const Exercise = () => {

 const [exercise, setExercise] = useState([] as any)

    const getExercise = async () => {
        const response = await axios.get('https://zen-backend-863bc7a70008.herokuapp.com/exercises')
        try {
            setExercise(response.data)
            console.log(response.data)
        } catch (err){
            console.log(err)
        }

    };

    useEffect(()=> {
        getExercise()
    }, []);

    return (  
        <>
        <div className="post-container container px-5 py-4">
            <h2 className="titlecase">{exercise.name}</h2>
            <p className="titlecase lead">{exercise.difficulty} {exercise.type} exercise for your {exercise.muscle}</p>
            <h3>Equipment</h3>
            <p className="titlecase lead">{exercise.equipment}</p>
            <h3>Instructions</h3>
            <p>{exercise.instructions}</p>
            <div className="mt-4 text-right">
                <button className="btn btn-dark" onClick={getExercise}>Next Exercise</button>
            </div>
        </div>
        </>
    );
}
 
export default Exercise;