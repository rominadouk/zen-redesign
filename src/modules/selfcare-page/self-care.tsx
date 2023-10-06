import DailyTip from "../DailyTip";
import { ReactComponent as SelfCareIcon } from '../../assets/selfcare-icon.svg'
import SelfCareDropdown from "./self-care-dropdown";

const SelfCare = () => {
    return ( 
        <div className="font-archivo">
            {/* SELF-CARE HEADER */}
            <section className='flex flex-row mt-12 mb-4 mx-5 md:mx-16 justify-between xl:mx-24'>
                <div className='flex flex-row'>
                    <SelfCareIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-2 font-bold'>Self-Care</h1>
                </div>
            </section>
            <DailyTip />
            {/* DAILY CHALLENGE SECTION */}
            <div className="mx-5 px-8 pt-3 pb-8 mb-4 drop-shadow-xl bg-pure-white">
                <p className='font-bold text-based mt-2 mb-3'>Daily Challenge</p>
                <h2 className='text-2xl font-bold mb-1'>Have some alone time</h2>
                <p>For many, alone time is a great opportunity for self-reflection and self-discovery. It can also rejuvenate you by balancing your emotions and letting your body physically relax. Not only does this practice help improve your well-being, but it can also improve your relationships with others.</p>
            </div>
            {/* I Want To.. Dropdown */}
            <div className='mx-5 px-8 pt-3 pb-8 mb-4 drop-shadow-xl bg-pure-white'>
                <p>I want to...</p>
                <SelfCareDropdown />

            </div>
        </div>
     );
}
 
export default SelfCare;