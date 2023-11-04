// import DailyTip from "../DailyTip";
import { ReactComponent as JournalIcon } from '../../assets/journal-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Journal = () => {
    // Set States & Variables
    const [allJournals, setAllJournals] = useState([] as any);
    const [thisYear, setThisYear] = useState(0);
    const [currentYearJournals, setCurrentYearJournals] = useState<any[]>([]);
    const today = new Date();
    const currentYear = today.getFullYear();
    const [journalMonths, setJournalMonths] = useState<{ [month: string]: Journal[] }>({});

    const navigate = useNavigate();


    type Journal= {
        title: string;
        post: string;
        createdAt: string;
        _id: string
    }

    const journalsByMonth: {[month:string]: Journal[]} = {}

    const getJournals = async () => {
        try {
            const response = await axios.get('https://zen-backend-e3xl.onrender.com/journals')
            setAllJournals(response.data)
            // sortJournalsByYearAndMonth()
        } catch(err) {
            console.log(err)
        }

    }

    const sortJournalsByYearAndMonth = () => {
        const currentYearJournals = allJournals.filter((journal:any) => {
            const journalDate = new Date(journal.createdAt);

            const journalYear = journalDate.getFullYear();

            return journalYear === currentYear;
        });
    
        setCurrentYearJournals(currentYearJournals);

        //Filter by month
        currentYearJournals.forEach((journal:any) => {
            const journalDate = new Date(journal.createdAt);
            const journalMonth = journalDate.toLocaleDateString('en-US', {
                month:'long'
            });


            //check if month is already in the object, if not, create an array
            if(!journalsByMonth[journalMonth]) {
                journalsByMonth[journalMonth] = []
            }
            
            //push journal to correspongind month's array
            journalsByMonth[journalMonth].push(journal);
        });
        setJournalMonths(journalsByMonth)
        console.log(journalsByMonth)
    };

    useEffect(() => {
        getJournals();
        setThisYear(currentYear);
        // sortJournalsByYearAndMonth();
    }, []);


    //can make multiple useEffect Hooks, sortJournalsByYearAndMonth() will only run when the value in the dependency array changes (allJournals)

    useEffect(() => {
        // Sort journals by year and month when 'allJournals' changes
        sortJournalsByYearAndMonth();
    }, [allJournals]);




    return ( 
        <div className='font-archivo'>
            <section className='flex flex-col mt-12 mb-4 mx-5 md:mx-16 xl:mx-24'>
                <div id='journals-top' className='flex flex-row justify-between '>
                    <div className='flex flex-row'>
                        <JournalIcon className='w-8 h-8 self-center'/>
                        <h1 className='text-4xl ml-2 font-bold'>Journal</h1>
                    </div>
                    {/* ADD JOURNAL BUTTON */}
                    <button className='flex bg-sea-green-blue rounded-md px-3' onClick={() => {
                        navigate('/journals/newjournal')
                    }}>
                        <p className='text-off-white self-center py-2'>Add New</p>
                        <AddIcon className='text-off-white h-7 w-7 self-center ml-1'/>
                    </button>
                </div>
                {/* SEARCH BAR */}
                    <div className='flex mt-7 h-12'>
                        <input type='text' name='journal-search' className='grow rounded-md border border-black p-4' placeholder='Search by title or date'/>
                    </div>
                    {/* <SearchIcon /> */}
            </section>
            {/* <DailyTip /> */}
            <section id='journals-display' >
                {/* BEGIN TERNARY: If render Journals is true, render data, if not then display info for no existing journals*/}
                {
                Object.keys(journalMonths).length > 0 ? 
                <div className='flex flex-col'>
                    <div className="relative flex py-5 items-center mx-5 md:mx-16 xl:mx-24">
                        <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-2xl">{thisYear}</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    {/* Iterates over the object key values (months) to see if they exist. then iterates over each month, accesses the object in each month and outputs the information. */}
                    {Object.keys(journalMonths).map((month, index)=> {
                        // Formatting Date & Time
                        if (journalMonths[month].length > 0) {
                            return (
                                <div key={index}>
                                    <div className='flex flex-row bg-light-blue-goals mx-5 my-1 mb-2 md:h-20 md:mx-16 xl:mx-24'>
                                        <div className='flex flex-row p-3'>
                                            <ChevronDownIcon className='mr-1 h-7 w-7 place-self-center'/>
                                            <h2 className='text-2xl place-self-center'>{month}</h2>
                                        </div>
                                    </div>

                                    <div className='md:flex md:flex-row md:flex-wrap md:mx-16 md:gap-x-4 xl:mx-24'>
                                    {journalMonths[month].map((journal)=> {
                                    // Formatting Date & Time
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
                                        // Each Journal Div | Return formatted Journal Information
                                        return (
                                            <div className='mx-5 px-8 pt-5 pb-9 mb-3 lg:mb-3 drop-shadow-xl bg-pure-white cursor-pointer  md:mx-0 md:w-3/12' key={journal._id} onClick={() => {
                                                navigate(`/journals/${journal._id}`)
                                            }}>
                                                <p className='text-2xl'>{journal.title}</p>
                                                <p className='mb-3'><span className='font-bold'>{formattedDateMonthYear}</span> | {formattedWeekday}, {formattedTime}</p>
                                                <p>{journal.post}</p>
                                            </div>
                                        )
                                    })}
                                    </div>


                                </div>
                            )
                        }
                    })}
                </div>
                : 
                <div className='flex flex-col text-center'>
                    <p>Welcome!</p>
                    <p>There's nothing here yet.</p>
                    <p>Try adding your first journal entry!</p>
                </div>}
                {/* END TERNARY */}
            </section>
        </div>
     );
}
 
export default Journal;