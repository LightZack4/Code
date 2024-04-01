import Activity from './Activity Section/Activity';
import Listing from './Listing Section/Listing';
import Top from './Top Section/Top'
import styles from '@/styles/Body.module.css'
const Body = () => {
    return ( 
        <div className={styles.mainContent}>
            <Top />
            <div className={styles.bottom}>
                <Listing />
                <Activity />
            </div>
        </div>

    );
}
 
export default Body;