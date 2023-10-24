import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import {ReactComponent as JournalIcon} from '../../assets/journal-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { Navigate } from "react-router-dom";
import axios from "axios";

const JournalView = () => {
    
    //declare types
    type Journal= {
        title: string;
        post: string;
        createdAt: string;
        updatedAt: string;
        _id: string
    }

    const { id } = useParams();
    const [oneJournal, setOneJournal] = useState({} as Journal);
    const navigate = useNavigate();
    const [formattedDateAndTime, setFormattedDateAndTime] = useState({
        monthAndDay: "",
        weekday: "",
        time: ""
    });
    //Get a single journal using the parameters in the url, Display the info for that.

    const getOneJournal = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/journals/${id}`);
            setOneJournal(response.data)
            console.log(response.data)
            console.log(oneJournal)
            formatDateAndTime(response.data)
        } catch(err) {
            console.log(err)
        }
    };

    const formatDateAndTime = (oneJournal: Journal) => {
        const journal = oneJournal
        const date = new Date(journal.createdAt);
        const formattedDateMonthYear = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            // year: 'numeric'
        });

        const formattedWeekday = date.toLocaleDateString('en-US', {
            weekday: 'long'
        });

        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        setFormattedDateAndTime({
            monthAndDay: formattedDateMonthYear,
            weekday: formattedWeekday,
            time: formattedTime
        });
    }

    useEffect(() => {
        getOneJournal();
    }, []);




    return (
        <div className='font-archivo'>
            <div className='flex flex-col mt-12 mb-4 mx-5 md:mx-16 xl:mx-24'>
                <div id='journals-top' className='flex flex-col justify-between'>
                    {/* HEADER START */}
                        <div className='flex flex-row'>
                            <JournalIcon className='w-8 h-8 self-center'/>
                            <h1 className='text-4xl ml-2 font-bold'>Journal</h1>
                        </div>
                        {/* BUTTONS CONTAINER */}
                        <div className='flex flex-row justify-between mt-6 mb-2'>
                            {/* BACK BUTTON */}
                            <button className='flex bg-smoke-darker rounded-md px-4'>
                                <p className='text-off-white self-center py-2'>Back</p>
                            </button>
                            <div className='flex flex-row'>
                                {/* DELETE BUTTON */}
                                <button className='flex bg-darker-red rounded-md px-5'>
                                    <p className='text-off-white self-center py-2'>Delete</p>
                                </button>
                                {/* EDIT BUTTON */}
                                <button className='flex bg-sea-green-blue rounded-md px-9 ml-1'>
                                    <p className='text-off-white self-center py-2'>Edit</p>
                                </button>
                            </div>

                        </div>
                    </div>
                    {/* HEADER END*/}
                    <div className='bg-pure-white px-6 py-4 drop-shadow-lg'>
                        <p className='text-xl'>{oneJournal.title}</p>
                        <p className='mb-3'><span className='font-bold'>{formattedDateAndTime.monthAndDay}</span> | <span className='text-smoke'>{formattedDateAndTime.weekday}, {formattedDateAndTime.time}
                            </span></p>
                        <p>{oneJournal.post}</p>
                    </div>

            </div> 
        </div>
    );
}
 
export default JournalView;