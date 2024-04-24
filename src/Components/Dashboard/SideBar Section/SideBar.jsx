import styles from '@/styles/SideBar.module.css'
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgMenuMotion } from "react-icons/cg";

import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { BsQuestionCircle, BsTrophy } from 'react-icons/bs'
import { MdDashboard } from "react-icons/md";


const Sidebar = () => {
    return ( 
        <div className='sideBar grid' id={styles.sideBar}>


<div className={styles.profileDiv}>
    <div className={styles.profileImage}>
        <img src="loginAssets\user.png" alt="Profile Image" />
    </div>
{/* add link t3 profile page */}
        <Link className={styles.profileText} href="/dashboard">Username</Link>
        <span className={styles.profileTag}>@Amigo01</span>
    
</div>

<div className="menuDiv">
                <h3 className="divTitle">
                <CgMenuMotion className='icon'/>
                    Quick Menu
                </h3>
                <ul className="menuLists grid">

                    <li className="listItems">
                        <Link href="/dashboard" className='menuLink flex'>
                            <MdDashboard className="icon"/>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="/myprofile" className='menuLink flex'>
                            <CgProfile className="icon"/>
                            <span className="smallText">
                                Profile
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="/create" className='menuLink flex'>
                            <IoMdAdd className="icon"/>
                            <span className="smallText">
                                Create
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="/chat" className='menuLink flex'>
                            <IoChatbox className="icon"/>
                            <span className="smallText">
                                Chat
                            </span>
                        </Link>
                    </li>

                </ul>
            </div>
 
          
            
            <div className="settingsDiv">
                <h3 className="divTitle">
                <IoSettingsOutline className="icon"/>
                        Settings
                </h3>
                <ul className="menuLists grid">

                    <li className="listItems">
                        <Link href="http://localhost:3000/settings/myaccount" className='menuLink flex'>
                            <FaRegUserCircle  className="icon"/>
                            <span className="smallText">
                                My Account
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="http://localhost:3000/settings/security" className='menuLink flex'>
                            <MdOutlineSecurity className="icon"/>
                            <span className="smallText">
                                Security
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="http://localhost:3000/settings/notification" className='menuLink flex'>
                            <IoMdNotificationsOutline className="icon"/>
                            <span className="smallText">
                                Notification
                            </span>
                        </Link>
                    </li>


                </ul>

            </div>
            <div className="sideBarCard">
                <BsQuestionCircle className='icon'/>
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Having trouble in (website), please contact us for more questions.</p>
                    <button className='btn'>Go to help center</button>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;