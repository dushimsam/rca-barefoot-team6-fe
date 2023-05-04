import React from 'react'
import Header from '../components/molecules/Header'
import Sidebar from '../components/molecules/Sidebar'
interface DashboardProps {
    children: React.ReactNode
}
function DashboardLayout(props: DashboardProps) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <div className='bg-[#F7F7F6] h-full'>
                    {/* Your dashboard content goes here */}
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout