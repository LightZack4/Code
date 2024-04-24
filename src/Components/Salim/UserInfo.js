import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus,faShare } from '@fortawesome/free-solid-svg-icons'
import LikeButton from './Likebuton';

export default function UserInfo (props){
    
  return (
    <div className="user-profile">
      <div className='mango'><img className="avatare" src={props.profilephoto} alt="Profilepicture" /> </div>
      
     <div className='infouserblok'>
       <h2 className='nom'>{props.username}</h2> 
       <p className='job'>{props.job}</p>
     
       <div className='byoglocation'> <div className='Location'> <img className='locationphoto' src="data:image/png;base64,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" alt='location icon'/> {props.location}</div>
          <hr className='horizn'/>
          <p className='byog'>{props.byog} </p>
       </div>
      <hr className='horizn2'/>
         <div className='buton'>
           <ul>
             <li><LikeButton/></li>
             <li><button className='sharebuton'><FontAwesomeIcon icon={faShare}/>Share profile</button></li>
             
            </ul>
         </div>
      
      
      </div>
      <div className="follow-info">
        <h3>Followers : {props.followers}</h3>
        <h3>Following : {props.following}</h3>
        <h3>Publucations : {props.Poblucations}</h3>
      </div>
      
      
           
    </div>
  );
}

 

