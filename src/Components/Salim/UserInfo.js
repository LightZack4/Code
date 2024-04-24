import React from 'react';
import { FontAwesomeIcon } from "react-icons/fa";
import { faShare } from 'react-icons/fa';
import LikeButton from '@/Components/Salim/Likebuton'; // Fixed typo in import statement
import SinglePost from '@/Components/Dashboard/Body Section/Listing Section/SinglePost'

export default function UserInfo (props) {
    
  return (
    <div className="user-profile">
      <div className='mango'><img className="avatare" src={props.profilephoto} alt="Profilepicture" /> </div>
      
     <div className='infouserblok'>
       <h2 className='nom'>{props.username}</h2> {/* Changed props.upre to props.username */}
       <p className='job'>{props.job}</p>
     
       <div className='byoglocation'> <div className='Location'> 
       
        {props.location}</div>
          <hr className='horizn'/>
          <p className='byog'>{props.biography} </p>
       </div>
      <hr className='horizn2'/>
         <div className='buton'>
           <ul>
             <li><LikeButton/></li>
             <li><button className='sharebuton'><faShare/>Share profile</button></li>
             
            </ul>
         </div>
     
      
      </div>
      <div className="follow-info">
        <h3>Followers : </h3>
        <h3>Following :  </h3>
        <h3>Publications : </h3>
      </div>
   
    </div>
    
  );
}