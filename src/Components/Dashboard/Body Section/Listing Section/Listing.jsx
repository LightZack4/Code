
import SinglePost from './SinglePost'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { CiShare2 } from "react-icons/ci";
import DropdownMenu from '@/Components/DropdownMenu';

const userImg = "https://images.unsplash.com/photo-1711924847907-498771a92bde?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
const Listing = () => {
    const [labelText, setLabelText] = useState('Show');
    const [open, setOpen] = useState(false);

    const handleChangleLable = () => {
        setLabelText(labelText === 'Show' ? 'Hide' : 'Show');
    }
    const handleClick = () => {
        setOpen(!open);
    };    
    return ( 
        <div className='listingSection'>
            <div className="heading flex">
                <h1>All Posts</h1>
                <button className='btn flex'>See All <BsArrowRightShort className='icon'/></button>
            </div>
                
            <div className="secContainer flex">
               <SinglePost />
               <SinglePost />
            </div>
        </div>
    );
}

export default Listing;
