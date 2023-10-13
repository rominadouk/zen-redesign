import DailyTip from "../DailyTip";
import { ReactComponent as JournalIcon } from '../../assets/journal-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Journal = () => {

    const [allJournals, setAllJournals] = useState([] as any);
    const [thisYear, setThisYear] = useState(0)

    const today = new Date();
    const year = today.getFullYear();
// Journal date has journal.createdAt and journal.updatedAt for timestamps.

    const getJournals = async () => {
        try {
            const response = await axios.get('http://localhost:4000/journals')
            setAllJournals(response.data)
            // sortJournalsByYear()
        } catch(err) {
            console.log(err)
        }

    }

    // const sortJournalsByYear = () => {
    //     allJournals.forEach((journal:any) => {
    //         const journalDate = new Date(journal.createdAt)
    //     })

    useEffect(() => {
        getJournals();
        setThisYear(year);
    }, [])




    return ( 
        <div className='font-archivo'>
            <section className='flex flex-col mt-12 mb-4 mx-5 md:mx-16 xl:mx-24'>
                <div id='goals-top' className='flex flex-row justify-between '>
                    <div className='flex flex-row'>
                        <JournalIcon className='w-8 h-8 self-center'/>
                        <h1 className='text-4xl ml-2 font-bold'>Journal</h1>
                    </div>
                    {/* ADD GOAL BUTTON */}
                    <button className='flex bg-sea-green-blue rounded-md px-3'>
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
                {allJournals.length > 0 ? 
                <div className='flex flex-col'>
                    <div className="relative flex py-5 items-center mx-5 md:mx-16 xl:mx-24">
                        <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-2xl">{thisYear}</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                    {allJournals.map((journal:any)=> {
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

                        return (
                            <div className='mx-5 px-8 pt-3 pb-8 mb-4 lg:mb-3 drop-shadow-xl bg-pure-white md:mx-16 lg:ml-16 lg:mr-0' key={journal._id}>
                                <p className='text-2xl'>{journal.title}</p>
                                <p><span className='font-bold'>{formattedDateMonthYear}</span> | {formattedWeekday}, {formattedTime}</p>
                            </div>
                        )
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