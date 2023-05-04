import React from 'react';
import { Search } from 'react-feather';
import Input from '../atoms/Input';

function Header(props: any) {
    const { data } = props
    return (
        <div className='authnav--bg py-2 text-sm flex flex-grow'>
            <h1 className='text-3xl px-12 text-white font-bold'>Logo</h1>
            <div className="mx-16 items-center flex justify-around text-sm w-full">
                <div className='flex border w-1/3 bg-white rounded-xl'>
                    <Search className='mt-2 ml-2' color='black' size={20} />
                    <Input placeholder='Search by any keyword or specific attribute'
                        type='text' name='search' className='border-0 -mt-2' />
                </div>
                <div className='flex justify-end'>
                    <img src="/notifications.svg" alt="Notifications" />
                </div>
                <div className='flex flex-col text-white justify-end'>
                    <p className='font-bold'>{data?.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : 'Loading...'}</p>
                    <p className='font-bold'>{data?.email ? `${data.email}` : 'Loading...'}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
