import React from 'react'
import Button from './atoms/Button'

function Users() {
    return (
        <div className='grid grid-cols-5 py-2 gap-2'>
            <p>Nelly Migisha</p>
            <p>Active</p>
            <p>nellymigisha@gmail.com</p>
            <Button className='bg-[#6487FE] mx-4 text-white'>Edit Role</Button>
            <Button className='bg-[#6487FE] mx-4 text-white'>Edit Role</Button>
        </div>
    )
}

export default Users