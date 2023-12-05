import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Joke = () => {
    const [joke, setJoke] = useState([] as any);

    const getJoke = async () => {
        try {
            const response = await axios.get('https://zen-backend-863bc7a70008.herokuapp.com/jokes');
            setJoke(response.data)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getJoke()
    }, []);
//use conditional rendering, checks if the right side is true first, if it is, it will render the right side. 
    return (
        <>
            <div className="post-container container px-5 py-4">
                {joke.length > 0 &&
                <>
                    <h2>Joke</h2> 
                    <p className='lead'>{joke[0].joke}</p> 
                    <p>*Important Note: These jokes are pulled from a third-party source, they are not moderated and were not created by me. </p>
                    <div className="mt-4 text-right">
                        <button className='flex bg-sea-green-blue rounded-md px-5 justify-center lg:place-self-center text-off-white' onClick={() => {getJoke()}}>Next Joke</button>
                    </div>
                </> }
            </div>
            
        </>
    );
}

export default Joke;
