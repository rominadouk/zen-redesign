import { ReactComponent as CancelIcon} from '../../assets/x-icon.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';


const AddJournal = () => {

    type emptyJournal = {
        title: String,
        post: String,
    }

    const navigate = useNavigate();
    const [journal, setJournal] = useState({} as emptyJournal);

    const handleCreate = async (journal:any) => {
        try {
            const response = await axios.post('http://localhost:4000/journals', journal)
            navigate('/journals')
        } catch (err) {
            console.log(err)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setJournal({
            ...journal, [e.target.name]: e.target.value
        })
        console.log(journal)
    };

    //Handle Form Submission
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleCreate(journal)
    };

    return ( 
        <div className='mx-5 px-8 pt-3 pb-8 mb-4  mt-5 drop-shadow-xl bg-pure-white font-archivo'>
            <h1 className=' text-2xl mb-4'>New Journal Entry</h1>
            <form onSubmit={handleSubmit}>
                {/* DATE INPUT */}
                {/* <div className='flex flex-col'>
                    <label htmlFor='date'>Date</label>
                    <input id='date' className='ring-1 ring-inset ring-black rounded-sm p-2'  type='date' name='journal-date' />
                </div> */}
                {/* TITLE INPUT */}
                <div className='flex flex-col'>
                    <label htmlFor='title' className='mb-1'>Title</label>
                    <input id='title' className='ring-1 ring-inset ring-black rounded-sm p-2' type='text'  name='title' onChange={handleChange} />
                </div>
                {/* MESSAGE INPUT */}
                <div className='flex flex-col mt-4'>
                    <label htmlFor='post' className='mb-1'>Message</label>
                    <textarea id='post' className='ring-1 ring-inset ring-black rounded-sm p-2 h-64' name='post' placeholder='Write here.' onChange={handleChange}/>
                </div>
                {/* FORM BUTTONS */}
                <div className=' flex flex-row justify-center gap-5 mt-6'>
                    <button className=' flex flex-row ring-2 py-2 px-4  w-28 ring-black rounded-sm' onClick={() => {
                        navigate('/journals')
                    }}>Cancel <CancelIcon  className='ml-2'/>
                    </button>
                    <input className='ring-1 py-2 px-4 w-28 ring-black bg-smoke-lightest rounded-sm cursor-pointer' type='submit' value='Save' />
                </div>
            </form>
        </div>
     );
}
 
export default AddJournal;