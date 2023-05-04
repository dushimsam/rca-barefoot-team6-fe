import React from 'react'
import Header from '../components/molecules/Header'
import Sidebar from '../components/molecules/Sidebar'
interface DashboardProps {
    children: React.ReactNode
}
function DashboardLayout(props: DashboardProps) {
    return (
        <div className="flex">
            <Sidebar ChildrenProps={props} />
        </div>
    )
}

export default DashboardLayout