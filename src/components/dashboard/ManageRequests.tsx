import React, { useState } from 'react'
import Button from '../atoms/Button'
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { authService } from '../../services/auth.service';
import { RequestInfo } from '../../types/services/user.types';
import Pagination from './Pagination';

function ManageRequests() {
    const PAGE_LIMIT = 6; // number of items per page
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const { data } = useQuery<RequestInfo[]>('viewRequests', async () => {
        const response = await authService.viewRequests();
        setPageCount(Math.ceil(response.data.length / PAGE_LIMIT));
        console.log("REquests: ", response.data);

        return response.data;
    });
    const handlePageClick = ({ selected: selectedPage }: { selected: number }) => {
        setCurrentPage(selectedPage);
    };

    const offset = currentPage * PAGE_LIMIT;
    const currentData = data ? data.slice(offset, offset + PAGE_LIMIT) : [];
    return (
        <div className='bg-white text-gray-700 rounded-lg'>
            <div className='grid grid-cols-6 py-4 font-bold pt-16'>
                <h4>User Id</h4>
                <h4>Room Id</h4>
                <h4>Check In Date</h4>
                <h4>Check Out Date</h4>
                <h4>Created At</h4>
                <h4>Status</h4>
                <h4 className='mx-8'>Actions</h4>
            </div>
            {currentData && currentData.map((user: RequestInfo, index: number) => (
                <div className='grid grid-cols-6 py-2 gap-2' key={index}>
                    <p>{user.userId}</p>
                    <p>{user.roomId}</p>
                    <p>{user.checkIn}</p>
                    <p>{user.checkOut}</p>
                    <p>{user.status}</p>
                    {/* <Button onClick={() => handleEditRoleClick(user)} className='bg-[#6487FE] mx-8 text-white'>Edit Role</Button>
                        {showEdit && <EditRole
                            id={user.id}
                            role={user.status}
                            formData={roleData}
                            setFormData={setRoleData}
                            onClose={handleEditClose} />} */}
                </div>
            ))}
            {/* Render the pagination component */}
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
    )
}

export default ManageRequests