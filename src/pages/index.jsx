import { Inter } from 'next/font/google'
import Styles from '@/styles/Body.module.css'
import Styles2 from '@/styles/mainPage.module.css'
import Sidebar from '@/Components/Dashboard/SideBar Section/SideBar'
import Body from '@/Components/Dashboard/Body Section/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div></div>
    // <div className="container" id={Styles2.myPageBody} >
    //   <Sidebar />
    //   <Body />
    // </div>
    
  )
}
