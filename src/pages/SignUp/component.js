import React from 'react';
import './style.scss';

const SignUp = () => {
    return(
        <div className='signup-page'>
            <div className='signup-filler'>
                
            </div>
            <div className='signup-content'>
                <h2>Sign Up</h2>
                <form>
                    <label>
                        <span>Email</span>
                        <input required type='email'/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input required type='password'/>
                    </label>
                    <label>
                        <span>Name</span>
                        <input required type='text'/>
                    </label>
                    <label>
                        <span>Last Name</span>
                        <input required type='text'/>
                    </label>
                    <button className='btn primary'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;