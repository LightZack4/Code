
import SinglePost from './SinglePost'
import { BsArrowRightShort } from 'react-icons/bs';


const userImg = "https://images.unsplash.com/photo-1711924847907-498771a92bde?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
const Listing = () => {
  
    return ( 
        <div className='listingSection'>
            <div className="heading flex">
                <h1>All Posts</h1>
                <button className='btn flex'>See All <BsArrowRightShort className='icon'/></button>
            </div>
                
            <div className="secContainer flex">
               <SinglePost />
               <SinglePost />
               <SinglePost />
               <SinglePost />
               <SinglePost />
               <SinglePost />
               <SinglePost />
               <SinglePost />
               <SinglePost />
            </div>
        </div>
    );
}

export default Listing;
