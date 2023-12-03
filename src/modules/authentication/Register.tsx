import * as React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [accountCreated, setAccountCreated] = useState(false);

    const [newUser, setNewUser] = useState({
        username: '',
        password: ''
    });

const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if(newUser.password === passwordConfirmation) {
        setPasswordMatch(true)
        try {
            const response = await axios.post('https://zen-backend-863bc7a70008.herokuapp.com/register', newUser);
            console.log('Account successfully created')
            toggleAccountCreation()
        } catch (err) {
            console.log(err)
        }
    } else {
        setPasswordMatch(false)
        return console.log('Passwords do not match')
    }
};

const toggleAccountCreation = () => {
    setAccountCreated(true)
    setTimeout(() => {
        setAccountCreated(false);
        navigate('/journals')
    }, 2000);

}

const handleRegisterFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
    })
    
};

    return ( 
        <div className='flex justify-center bg-smoke-dark font-archivo h-full'>
        <div className='flex flex-col w-72 bg-off-white rounded-lg my-5 pb-14'>
            <h1 className='text-3xl font-brand basis-full my-3 text-5xl text-center'>zen</h1>
            {/* LINE */}
            <div  className='line border-solid border-black w-64 place-self-center border-[1px]'></div>
            {/* END SOLID LINE */}
            <div className='flex flex-col mt-5 text-xl'>
                <h2 className='text-center'>Register</h2>
                <form className='flex flex-col place-self-center mt-5 gap-5 text-sm' onSubmit={handleSubmit}>
                    {/* USERNAME INPUT */}
                    <div className=' flex flex-col w-56'>
                        <label htmlFor='username'>Username</label>
                        <input  className='rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold ring-1 ring-inset ring-black'type="text" name="username" value={newUser.username} onChange={handleRegisterFormChange} placeholder='Username'/>
                    </div>
                    {/* PASSWORD INPUT */}
                    <div className=' flex flex-col w-56'>
                        <label htmlFor='password'>Password</label>
                        <input className='rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold ring-1 ring-inset ring-black' type="password" name="password" value={newUser.password} onChange={handleRegisterFormChange} placeholder='Password'/>
                    </div>
                    {/* PASSWORD CONFIRMATION */}
                    <div className=' flex flex-col w-56'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input className={passwordMatch ? 'rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold ring-1 ring-inset ring-black' : 'rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold ring-1 ring-inset ring-darker-red'} type="password" name="confirmPassword" value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}} placeholder='Confirm password'/>
                        {!passwordMatch && (
                            <p className='text-darker-red text-center'>Error: Passwords do not match!</p>
                        )}
                    </div>
                    {/* END PASSWORD CONFIRMATION */}
                    <button type='submit' className='bg-sea-green-blue hover:off-white text-off-white font-semibold py-2 px-4 border border-sea-green-blue hover:border-transparent rounded'>Create an account</button>
                    {accountCreated && (
                        <p className='text-center text-xs text-sea-green-blue'>Account successfully created!</p>
                    )}
                    {/* CREATE ACCOUNT TEXT */}
                    <div className='text-center text-xs mt-[-10px]'>
                    <p>Have an account?</p>
                    <p className=''>
                        <Link to='/login'>
                            <span className='text-l text-sea-green-blue underline logout cursor-pointer'>Login</span>
                        </Link> here.
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default Register;