import React from 'react';
import './style.scss';

const SignIn = () => {
    return(
        <div className='signin-page'>
            <div className='signin-filler'>
                
            </div>
            <div className='signin-content'>
                <h2>Sign In</h2>
                    <form>
                        <label>
                            <span>Email</span>
                            <input required type='email'/>
                        </label>
                        <label>
                            <span>Password</span>
                            <input required type='password'/>
                        </label>
                        <button className='btn primary'>Sign In</button>
                    </form>
                </div>
        </div>
    );
}

export default SignIn;