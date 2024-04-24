import Sidebar from '@/Components/Dashboard/SideBar Section/SideBar'
import Body from '@/Components/Dashboard/Body Section/Body'
import Post from '@/Components/Dashboard/Body Section/Listing Section/SinglePost'
const ProfileComp = () => {
    const userImg = "https://images.unsplash.com/photo-1711924847907-498771a92bde?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        
        <div className="profileDivMain">
            <div className='infoDiv'>
            <div className='pfp'>
                <img src={userImg} className='userImg' />
            </div>


            <div className='importantInfo'>
                    <h1>Fiala Zakaria</h1>
                    <span>Web Developer</span>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Location:</strong> New York City</p>
                    <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
            </div>


     
            </div>
                    <div className='details'></div>
    

        </div>
        
    );
}
 
export default ProfileComp;
