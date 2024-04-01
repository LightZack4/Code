import styles from '@/styles/Activity.module.css'
import { BsArrowRightShort } from 'react-icons/bs';
const Activity = () => {
    return ( 
            <div className='activitySection'>
                <div className="heading flex">
                    <h1>Recent Activity</h1>
                    <button className='btn flex'>
                        See All
                        <BsArrowRightShort className='icon'/>
                    </button>
                </div>  
                <div className="secContainer grid">
                    <div className="singleCustomer flex">
                        <img src="/loginAssets/user.png" alt="" />
                        <div className="customerDetails">
                            <span className="name">Nijima Hajiro</span>
                            <small>followed you recently</small>
                        </div>
                        <div className="duration">2 min ago</div>
                    </div>
                    <div className="singleCustomer flex">
                        <img src="/loginAssets/user.png" alt="" />
                        <div className="customerDetails">
                            <span className="name">Nijima Hajiro</span>
                            <small>followed you recently</small>
                        </div>
                        <div className="duration">2 min ago</div>
                    </div>
                    <div className="singleCustomer flex">
                        <img src="/loginAssets/user.png" alt="" />
                        <div className="customerDetails">
                            <span className="name">Nijima Hajiro</span>
                            <small>followed you recently</small>
                        </div>
                        <div className="duration">2 min ago</div>
                    </div>
                    <div className="singleCustomer flex">
                        <img src="/loginAssets/user.png" alt="" />
                        <div className="customerDetails">
                            <span className="name">Nijima Hajiro</span>
                            <small>followed you recently</small>
                        </div>
                        <div className="duration">2 min ago</div>
                    </div>
                    </div>  
            </div>
     );
}
 
export default Activity;