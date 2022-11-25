import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

    const { signInByGoogle, setUser } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => console.error('error: ', error))
    }

    return (
        <div className='w-full'>
            <div class="flex justify-center items-center">
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-white px-16 py-8 rounded-lg shadow-lg shadow-indigo-500/40'>
                    <form className='mb-4'>
                        <h1 className='text-3xl font-semibold'>Register</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Name: </span>
                                </label>
                                <input type="text" placeholder="FULL NAME" className="input input-bordered input-accent w-56 md:w-72" name='name' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Email: </span>
                                </label>
                                <input type="Email" placeholder="EMAIL Address" className="input input-bordered input-accent w-56 md:w-72" name='email' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Password: </span>
                                </label>
                                <input type="Password" placeholder="PASSWORD" className="input input-bordered input-accent w-56 md:w-72" name='password' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Image URL: </span>
                                </label>
                                <input type="text" placeholder="IMAGE URL" className="input input-bordered input-accent w-56 md:w-72" name='img' />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                        <h2 className='text-xl mt-2'>Already have an Account! Please <Link to='/login'><span className='text-blue-600'>Log In</span></Link></h2>
                    </form>
                    <hr />
                    <h1 className='text-2xl font-semibold mt-4 mb-4'>Log In With</h1>
                    <div className='flex justify-center'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline text-xl"><FcGoogle className='mr-1'></FcGoogle> Log In By Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;