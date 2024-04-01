    import styles from '@/styles/Listing.module.css'
    import { AiFillHeart } from 'react-icons/ai';
    import { BsArrowRightShort } from 'react-icons/bs';
    import { CiShare2 } from "react-icons/ci";
    import Link from 'next/link';
    const Listing = () => {
        return ( 
            <div className='listingSection'>

                <div className="heading flex">
                    <h1>All Posts</h1>
                    <button className='btn flex'>See All <BsArrowRightShort className='icon'/></button>
                </div>
                
                <div className="secContainer flex">
                    <div className="singleItem">
                        <AiFillHeart className='icon'/>
                        <CiShare2 className='icon share'/> 
                            {/* example post */}
                            <img src="/loginAssets/dmc.jpg" alt="dmc" />
                            <h3>Annual Vince</h3>
                            
                            <div className={styles.commentContainer}>
                            <textarea className={styles.commentBox} placeholder="Write your comment here..."></textarea>
                            <button className={`btn ${styles.postButton}`}>Post</button>
                        </div>
                            
                        <div className={styles.linkContainer}>
                        <Link href='/' className={styles.viewComments}>
                            View all comments
                        </Link>
                    </div>

                    
                    
                            
                    </div>
                    <div className="singleItem">
                        <AiFillHeart className='icon'/>
                        <CiShare2 className='icon share'/> 
                            {/* example post */}
                            <img src="/loginAssets/dmc.jpg" alt="dmc" />
                            <h3>Annual Vince</h3>
                            
                            <div className={styles.commentContainer}>
                            <textarea className={styles.commentBox} placeholder="Write your comment here..."></textarea>
                            <button className={`btn ${styles.postButton}`}>Post</button>
                        </div>
                            
                        <div className={styles.linkContainer}>
                        <Link href='/' className={styles.viewComments}>
                            View all comments
                        </Link>
                    </div>

                    
                    
                            
                    </div>
                </div>

            </div>
        );
    }
    
    export default Listing;