import React from 'react'
import { Search, Activity } from 'react-feather'
import Input from '../atoms/Input'
function Header() {
    return (
        // gap-x-0 md:gap-x-52 lg:gap-x-52
        <div className="text-sm bg-white border-b border-gray-200 py-3 px-8 items-center grid grid-flow-col-dense">
            <h1 className="text-2xl font-bold leading-tight text-gray-900">Dashboard</h1>
            <div className='flex border rounded-md'>
                <Search className='mt-1.5 ml-2' color='black' size={20} />
                <Input placeholder='Search by any keyword or specific attribute'
                    type='text' name='search' className='border-0' />
            </div>
            <div className='flex justify-end'>
                <img src="/notifications.svg" alt="Notifications" />
            </div>

            <div>
                <div className='flex justify-end'>
                    <p className='font-bold'>John Smith</p>
                </div>
                <div className='flex justify-end'>
                    <p>smith@gmail.com</p>
                </div>
            </div>
        </div >
    )
}

export default Header