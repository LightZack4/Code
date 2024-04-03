import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { CiShare2 } from "react-icons/ci";
import DropdownMenu from '@/Components/DropdownMenu';

const userImg = "https://images.unsplash.com/photo-1711924847907-498771a92bde?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
const SinglePost = () => {
    const [open, setOpen] = useState(false);
    const [labelText, setLabelText] = useState('Show');

    const handleChangleLable = () => {
        setLabelText(labelText === 'Show' ? 'Hide' : 'Show');
    };

    const handleClick = () => {
        setOpen(!open);
    };    

    return ( 
        <div className='singleItem'>
            <div className="userall">
                <div className="userPart">
                    <img src={userImg} alt="user" />
                    <span>Username
                        <p className='grey'>@Amigo23</p>
                    </span>
                </div>   
                <IoIosMore className="more" onClick={handleClick}/>       
            </div>
                
            <img src="/loginAssets/dmc.jpg" alt="dmc" />
            <DropdownMenu open={open}/> 

            <div className='postIcon'>
                <div className='single'><AiOutlineHeart className='icon'/>
                <span className='iconWriting'>24.4k Like</span></div>

                <div className='single'><CiShare2 className='icon share'/> 
                <span className='iconWriting'>134 Share</span></div>

                <div className='single'><FaRegComment className='icon' />
                <span className='iconWriting'>33 Comment</span></div>

                <div className='single'><BsBookmark className='icon' /> 
                <span className='iconWriting'>16 Saved</span></div>
            </div>
                
            <div className="captionSection">
                <p className='content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium officia ex doloribus, ipsam facere aliquam! Deleniti expedita sapiente illum eos. Sequi enim tempore molestias at assumenda praesentium dolorum fuga?</p>
                <input className='expand-btn' type='checkbox' id='ch'/>
            </div>
                
            <label htmlFor="ch" onClick={handleChangleLable}>{labelText}</label>
        </div>
    );
}

export default SinglePost;