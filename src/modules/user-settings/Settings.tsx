import {  useContext } from 'react';
import { AuthContext } from '../authentication/AuthContext';

const Settings = () => {

    const {logout} = useContext(AuthContext)

    return ( 
        <>
            <button className='bg-sea-green-blue hover:bg-blue-500 text-off-white font-semibold py-2 px-4 hover:border-transparent rounded mr-2'onClick={logout}>Logout</button>
        </>
     );
}
 
export default Settings