import styles from '@/styles/SideBar.module.css'
import Link from 'next/link';

import { IoMdSpeedometer } from 'react-icons/io'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { MdOutlineExplore } from 'react-icons/md'
import { BsQuestionCircle, BsTrophy } from 'react-icons/bs'


const Sidebar = () => {

    
    return ( 
        <div className='sideBar grid' id={styles.sideBar}>


            <div className={styles.logoDiv}>
                <img src="/loginAssets/logo.png" className={styles.logo} />
                <h2>Website.</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon"/>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <RiKakaoTalkFill className="icon"/>
                            <span className="smallText">
                                My courses
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <MdOutlineExplore className="icon"/>
                            <span className="smallText">
                                Explore
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <BsTrophy className="icon"/>
                            <span className="smallText">
                                Something
                            </span>
                        </Link>
                    </li>

                </ul>
            </div>
            
            <div className="settingsDiv">
                <h3 className="divTitle">
                    Settings
                </h3>
                <ul className="menuLists grid">

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon"/>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <RiKakaoTalkFill className="icon"/>
                            <span className="smallText">
                                My courses
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <MdOutlineExplore className="icon"/>
                            <span className="smallText">
                                Explore
                            </span>
                        </Link>
                    </li>

                    <li className="listItems">
                        <Link href="#" className='menuLink flex'>
                            <BsTrophy className="icon"/>
                            <span className="smallText">
                                Something
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