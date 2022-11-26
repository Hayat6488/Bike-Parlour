import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { signInByGoogle, setUser, login } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => console.error('error: ', error))
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;

        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => console.error('error: ', error))
    }

    return (
        <div className='w-full mt-6'>
            <div className='flex justify-center items-center'>
                <div className='bg-white px-16 py-8 rounded-lg shadow-lg shadow-indigo-500/40'>
                    <form onSubmit={handleLogIn} className='mb-4'>
                        <h1 className='text-3xl font-semibold'>Log In</h1>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex flex-col justify-start'>
                                <label className="label">
                                    <span className="label-text text-2xl">Email: </span>
                                </label>
                                <input type="Email" placeholder="EMAIL Address" className="input input-bordered input-accent w-56 md:w-72" name='email' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <label className="label">
                                    <span className="label-text text-2xl">Password: </span>
                                </label>
                                <input type="Password" placeholder="PASSWORD" className="input input-bordered input-accent w-56 md:w-72" name='password' />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                        <h2 className='text-xl mt-2'>Don't have an Account! Please <Link to='/register'><span className='text-blue-600'>Register</span></Link></h2>
                    </form>
                    <hr />
                    <h1 className='text-2xl font-semibold mt-4 mb-4'>Log In With</h1>
                    <div className='grid grid-cols-1 gap-2'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline text-xl"><FcGoogle className='mr-1'></FcGoogle> Log In By Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;