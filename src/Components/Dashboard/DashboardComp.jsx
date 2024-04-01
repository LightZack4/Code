import Sidebar from '@/Components/Dashboard/SideBar Section/SideBar'
import Body from '@/Components/Dashboard/Body Section/Body'
const DashboardComp = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard flex">
                <div className="dashboardContainer flex">
                    <div className="container">
                        <Sidebar />
                        <Body />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DashboardComp;
