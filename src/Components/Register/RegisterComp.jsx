import Link from 'next/link';

import React from 'react';
import {FaUserShield} from 'react-icons/fa' // Import React if not imported
import {BsFillShieldLockFill} from 'react-icons/bs' // Import React if not imported
import {AiOutlineSwapRight} from 'react-icons/ai' // Import React if not imported
import {MdMarkEmailRead} from 'react-icons/md' // Import React if not imported
const RegisterComp = () => {
    return (
        <div className="registerPage flex">
            <div className="container flex">


                <div className="videoDiv">
                 <video src='/loginAssets/nature.mp4' autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className='title'> Welcome To The Best Uviversity Social Media</h2>
                        <p>Adopt fun and studies!</p>
                       
                    </div>
                    <div className="footerDiv">
                            <span className="text">Have an account?</span>
                            <Link href="/login">
                                <button className='btn'>Login</button>
                            </Link>
                        </div>

                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src="/loginAssets/logo.png" alt="Logo Image"/>
                        <h3>Let Us Know You!</h3>
                    </div>
               
                <form className='form grid'>
                       
                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type="email" id='email' placeholder='Enter Email' />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="username" id='username' placeholder='Enter Username' />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password' />
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>
                    <span className='forgotPassword'>
                        Forgot your password? <Link href="">Click Here</Link>
                    </span>

                </form>
            </div>
        </div>
        </div>
    );
}

export default RegisterComp;
