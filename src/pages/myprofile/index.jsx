import ProfileComp from "@/Components/ProfileComp"
import Sidebar from '@/Components/Dashboard/SideBar Section/SideBar'

const MyProfile = () => {
    return ( 
        <div className="dashboard-wrapper">
            <div className="dashboard flex">
                <div className="dashboardContainer flex">
                    <div className="container">
                        <Sidebar />
                        <ProfileComp />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MyProfile;