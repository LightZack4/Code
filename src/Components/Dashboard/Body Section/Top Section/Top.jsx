import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {IoNotificationsOutline} from 'react-icons/io5'
import { BsArrowRightShort } from 'react-icons/bs';
import DropDownProfile from '@/Components/DropDownProfile';
import { useState } from 'react';

const Top = () => {
    const [openProfile, setOpenProfile] = useState(false);
    return ( 
        
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to (Website).</h1>
                    <p>Hello Zack, Welcome Back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon"/>
                    <IoNotificationsOutline className="icon"/>
                    <div className="adminImage" onClick={() => setOpenProfile((prev) => !prev)}>
                        <img src="/loginAssets/user.png" alt="Admin Image" />
                        
                    </div>
                    {/* {
                            openProfile && <DropDownProfile />
                    } */}
                    
                </div>

            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and post extraodinary products</h1>
                    <p>The world's fast growing industry today are natural made products!</p>
                      <div className="buttons flex">
                            <button className="btn">Explore More</button>
                            <button className="btn transparent">Top Sudents</button>
                        </div> 

                        <div className="videoDiv">
                            <video src="/loginAssets/nature.mp4" autoPlay loop muted></video>
                            </div> 

                </div>

                <div className="leftCard flex">
                    <div className="main flex">

                        <div className="textDiv">
                            <h1>My stats</h1>
                            <div className="flex">
                                <span>
                                    Today <br /> <small>4 Posts</small>
                                </span>
                                <span>
                                    This Month <br /> <small>99+ Posts</small>
                                </span>
                            </div>
                                 <span className="flex link">
                                    Go to my profile <BsArrowRightShort className="icon"/>  
                                    </span>                            
                        </div>
                        <div className="imgDiv">
                            <img src="/loginAssets/books.png" alt="Image Name" />
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Top;