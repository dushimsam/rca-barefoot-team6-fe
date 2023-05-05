import React, { useState } from 'react'
import Button from '../atoms/Button'
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { authService } from '../../services/auth.service';
import { RequestInfo, RequestStatus } from '../../types/services/user.types';
import Pagination from './Pagination';

function ManageRequests() {
    const PAGE_LIMIT = 5; // number of items per page
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const { data, isLoading } = useQuery<{ data: RequestInfo[] }>('viewRequests', async () => {
        const response = await authService.viewRequests();
        setPageCount(Math.ceil(response.data.data.length / PAGE_LIMIT));
        return response.data
    });
    const handlePageClick = ({ selected: selectedPage }: { selected: number }) => {
        setCurrentPage(selectedPage);
    };

    const offset = currentPage * PAGE_LIMIT;
    const currentData = Array.isArray(data?.data) ? data?.data.slice(offset, offset + PAGE_LIMIT) : [];
    console.log("Current: ", currentData?.at(1));
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-white text-gray-700 p-10 rounded-lg text-sm'>
            <div className='grid grid-cols-8 gap-4 py-4 font-bold'>
                <h4>User Id</h4>
                <h4>Room Id</h4>
                <h4>Check In Date</h4>
                <h4>Check Out Date</h4>
                <h4>Created At</h4>
                <h4>Status</h4>
                <div className='mx-4'>
                    <h4>Actions</h4>
                </div>
            </div>
            {currentData && currentData.map((req: RequestInfo, index: number) => (
                <div className='grid grid-cols-8 py-4 gap-4' key={index}>
                    <p>{req.userId}</p>
                    <p>{req.roomId}</p>
                    <p className='truncate text-xs'>{req.checkIn}</p>
                    <p className='truncate text-xs'>{req.checkOut}</p>
                    <p className='truncate text-xs'>{req.createdAt}</p>
                    <p className={`${req.status == RequestStatus.REJECTED ? 'text-[#FF1111]' : 'text-[#3C4DE9]'}`}>{req.status}</p>
                    <Button className='mx-4'>Approve</Button>
                    <Button className='mx-4'>Reject</Button>
                </div>
            ))}
            {/* Render the pagination component */}
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
    )
}

export default ManageRequests