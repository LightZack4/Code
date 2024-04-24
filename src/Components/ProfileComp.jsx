import Post from '@/Components/Dashboard/Body Section/Listing Section/SinglePost'
import Listing from '@/Components/Dashboard/Body Section/Listing Section/Listing'

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
                    <span>@Alger</span>
                    <br />
                    <br />  
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Occupation:</strong> Web Developer</p>
                    <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
                    <p><strong>About Me:</strong> King of the pirates!</p>
            </div>
            <div className="buttonsProfile">
                    <button className="BtnMsg Message">
                    <svg class="svgIcon" viewBox="0 0 512 512" height="1.2em"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                    Messages
                </button>
                <button className="BtnMsg Follow">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="github">
                      <line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line>
                    </svg>
                        Follow 
                </button>

                </div>  
     
            </div>
                    <div className='details'>
                        <Listing/>

                    </div>
    

        </div>
        
    );
}
 
export default ProfileComp;
