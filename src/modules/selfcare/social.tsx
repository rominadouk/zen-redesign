import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Social = () => {
    const [socialActivity, setSocialActivity] = useState([] as any);

    const getActivity = async () => {
        try {
            const response = await axios.get('https://www.boredapi.com/api/activity?type=social')
            setSocialActivity(response.data)
        } catch(err) {
            console.log(err)
        }

    };
    


    useEffect(()=> {
        getActivity()

    }, []);


    return ( 
        <>
        <div className="post-container container px-5 py-4">
            <h2>Social Activity</h2>
            <p className='lead'>{socialActivity.activity}.</p>
            <h3>Cost Rating</h3>
            <p className='lead'>{socialActivity.price}</p>
            <div className="mt-4 text-right">
                <button className='flex bg-sea-green-blue rounded-md px-5 justify-center lg:place-self-center text-off-white' onClick={()=> {getActivity()}}>Next Activity</button>
            </div>
        </div>
        </>
     );
}
 
export default Social;