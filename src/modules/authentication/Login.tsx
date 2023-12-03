import * as React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import { AuthContext } from './AuthContext'; //Import Auth Context


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext); // Use the AuthContext

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://zen-backend-863bc7a70008.herokuapp.com/login', {username, password });
            // Save JWT received from the server in localStorage
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            navigate('/');
            console.log('Log in successful!');
            setUsername('');
            setPassword('');
        } catch (err) {
            console.log(err);
            setIsAuthenticated(false);
        };
    }


    return ( 
        <div className='flex justify-center bg-smoke-dark font-archivo h-full'>
            <div className='flex flex-col w-72 bg-off-white rounded-lg my-5 pb-14'>
                <h1 className='text-3xl font-brand basis-full my-3 text-5xl text-center'>zen</h1>
                {/* LINE */}
                <div  className='line border-solid border-black w-64 place-self-center border-[1px]'></div>
                {/* END SOLID LINE */}
                <div className='flex flex-col mt-5 text-xl'>
                    <h2 className='text-center'>Login</h2>
                    <p className='text-xs text-center'>Demo without account creation:</p>
                    <p className='text-xs text-center'>Username: test</p>
                    <p className='text-xs text-center'>Password: test</p>
                    <form className='flex flex-col place-self-center mt-5 gap-5 text-sm' onSubmit={handleSubmit}>
                        {/* USERNAME INPUT */}
                        <div className=' flex flex-col w-56'>
                            <label htmlFor='username'>Username</label>
                            <input id='username' type='text' className='rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold ring-1 ring-inset ring-black' value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder='Username'/>
                        </div>
                        {/* PASSWORD INPUT */}
                        <div className=' flex flex-col w-56'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold ring-1 ring-inset ring-black' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
                        </div>
                        <button type='submit' className='bg-sea-green-blue hover:off-white text-off-white font-semibold py-2 px-4 border border-sea-green-blue hover:border-transparent rounded'>Sign In</button>
                        {/* CREATE ACCOUNT TEXT */}
                        <div className='text-center text-xs mt-[-10px]'>
                            <p>Don't have an account yet?</p>
                            <p className=''>
                                <Link to='/register'>
                                    <span className='text-l text-sea-green-blue underline logout cursor-pointer'>Register</span>
                                </Link> here.
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
     );
}
 
export default Login;