import DailyTip from "../DailyTip";
import { ReactComponent as SelfCareIcon } from '../../assets/selfcare-icon.svg'

const SelfCare = () => {
    return ( 
        <div className="font-archivo">
            <section className='flex flex-row mt-12 mb-4 mx-5 md:mx-16 justify-between xl:mx-24'>
                <div className='flex flex-row'>
                    <SelfCareIcon className='w-8 h-8 self-center'/>
                    <h1 className='text-4xl ml-2 font-bold'>Self-Care</h1>
                </div>
            </section>
            <DailyTip />

        </div>
     );
}
 
export default SelfCare;