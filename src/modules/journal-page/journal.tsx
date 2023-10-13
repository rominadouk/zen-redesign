import DailyTip from "../DailyTip";
import { ReactComponent as JournalIcon } from '../../assets/journal-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Journal = () => {
    const [allJournals, setAllJournals] = useState([] as any)

    const getJournals = async () => {
        try {
            const response = await axios.get('http://localhost:4000/journals')
            setAllJournals(response.data)
        } catch(err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getJournals();
    }, [])




    return ( 
        <div className='font-archivo'>
            <section id='goals-top' className='flex flex-row mt-12 mb-4 mx-5 md:mx-16 justify-between xl:mx-24'>
                <div className='flex flex-row'>
                    <JournalIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-2 font-bold'>Journal</h1>
                </div>
                {/* ADD GOAL BUTTON */}
                <button className='flex bg-sea-green-blue rounded-md px-3'>
                    <p className='text-off-white self-center py-2'>Add New</p>
                    <AddIcon className='text-off-white h-7 w-7 self-center ml-1'/>
                </button>
            </section>
            <DailyTip />
            <section id='journals-display' className='mx-5'>
                {/* BEGIN TERNARY: If render Journals is true, render data, if not then display info for no existing journals*/}
                {allJournals.length > 0 ? 
                <div>
                    {allJournals.map((journal:any)=> {
                        return (
                            <div key={journal._id}>
                            <p>{journal.title}</p>
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