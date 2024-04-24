
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faLocationDot,faCamera } from '@fortawesome/free-solid-svg-icons'
import { FaCamera } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ButtonList() {
  return (
    <ul className='ChangeBio-Avatar-location'>
      <li><button className='camerabuton'><FaCamera/> {/*Change Avatar*/}</button></li>
      <li><button className='penbuton'><FaPen /> {/*Change Biography*/}</button></li>
      <li><button className='penbuton'><FaLocationDot/> {/*Change location*/}</button></li>

     
    </ul>
  );
}

export default ButtonList;
