import DailyTip from "../DailyTip";
import { ReactComponent as JournalIcon } from '../../assets/journal-icon.svg'
import { ReactComponent as AddIcon } from '../../assets/journal-icon.svg'

const Journal = () => {
    return ( 
        <div>
            <section id='goals-top' className='flex flex-row mt-12 mb-4 mx-5 md:mx-16 justify-between xl:mx-24'>
                <div className='flex flex-row'>
                    <JournalIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-2 font-bold'>Journal</h1>
                </div>
                {/* ADD GOAL BUTTON */}
                <button id='add-goal-button' className='flex bg-sea-green-blue rounded-md px-3'>
                    <p className='text-off-white self-center py-2'>Add New</p>
                    <AddIcon className='text-off-white h-7 w-7 self-center ml-1'/>
                </button>
            </section>
            <DailyTip />

        </div>
     );
}
 
export default Journal;