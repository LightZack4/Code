import {BiSearchAlt} from 'react-icons/bi'
import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Popup from '@/Components/Dashboard/Body Section/Listing Section/CommentPopup';
import { HiOutlineUpload } from "react-icons/hi";



const Top = () => {

    const [showCreate, setShowCreate] = useState(false);
    const handleCreate = () => {
        setShowCreate(true);
    };
    return ( 
        <div className="topSection">
            <div className="headerSection flex">
    <div className="adminDiv flex">
    <button className="button">
   <svg viewBox="0 0 448 512" className="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
</button>
<button className="button" aria-label="Chat">
    <svg viewBox="0 0 512 512" className="chat-icon" aria-hidden="true">
        <path fill="currentColor" d="M460 0H52C23.3 0 0 23.3 0 52v364c0 28.7 23.3 52 52 52h116.7l-10.7 64L256 468.7l97.3 11.3L399.3 468l-10.7-64H460c28.7 0 52-23.3 52-52V52c0-28.7-23.3-52-52-52zM255.7 384l-11.7 64-45.3-38.7L64 448h-12c-9.3 0-16-7.3-16-16V80c0-8.7 6.7-16 16-16h384c9.3 0 16 7.3 16 16v352c0 9.3-6.7 16-16 16h-12l-135.3-99.7-45.3 38.7-11.7-64z"></path>
    </svg>
</button>
<button className="button" aria-label="Add" onClick={setShowCreate}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="add-icon" aria-hidden="true">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
    </svg>
</button>



    </div>
    <div className="searchBar flex">
    <input type="text" placeholder="Search Dashboard" className="searchInput" />
    <BiSearchAlt className="icon"/>
</div>

    <div className="title">
        <h1>Welcome to (Website).</h1>
        <p>Hello Zack, Welcome Back!</p>
    </div>

    
</div>


            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and post the extraodinary!</h1>
                    <p>The world's fast growing social media for students!</p>
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

                        {/* <div className="sideBarCard">
                <BsQuestionCircle className='icon'/>
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Having trou  ble in (website), please contact us for more questions.</p>
                    <button className='btn'>Go to help center</button>
                </div>
            </div> */}
                    </div>

                </div>
            </div>

            <Popup trigger={showCreate} setTrigger={setShowCreate}>

            <div className="createDiv">
        <div className="wrapper">
          <header>Create Post</header>
          <form>
            {/* Hidden file input */}
            <input id="file-input" className="file-input" type="file" name="file" style={{ display: 'none' }} />
            {/* Custom button to trigger file input */}
            <label htmlFor="file-input" className="file-label">
              <i className="fas fa-cloud-upload-alt"></i>
              <HiOutlineUpload className='uploadIcon'/>
              <p>Browse File to Upload</p>
            </label>
          </form>
          <section className="progress-area"></section>
          <section className="uploaded-area"></section>
        </div>
        <div className="container1">
          <header>Enter a caption here</header>
          <textarea placeholder="Enter text"></textarea>
          <button  className='testbtn'>Submit</button>
        </div>
      </div>
            </Popup>
        </div>
     );
}
 
export default Top;