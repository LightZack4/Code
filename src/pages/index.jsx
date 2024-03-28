import Image from 'next/image'
import { Inter } from 'next/font/google'
import DashComp from '@/Components/Dashboard/DashboardComp'
import LoginComp from '../Components/Login/LoginComp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <LoginComp />
    {/* <Dashboard/> */}

    </>
  )
}
