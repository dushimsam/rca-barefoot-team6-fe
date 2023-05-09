import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { requestStore } from '../../store/request.store';
import useProfileQuery from '../../utils/useProfileQuery';
import Button from '../atoms/Button';
import Pagination from './Pagination';
import { RequestInfo, RequestStatuses, UpdateRequest } from '../../types/services/request.types';
import { useQuery } from 'react-query';
import { requestService } from '../../services/request.service';
import EditRequest from './EditRequest';
import AddRequest from './AddRequest';

function UserRequests() {
    const PAGE_LIMIT = 5; // number of items per page
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const { data: userData } = useProfileQuery();

    const { data: userRequests, isLoading: reqLoading, refetch, isFetching } = useQuery<{ data: RequestInfo[] }>('userRequests', async () => {
        const response = await requestService.getRequestsByUserId(userData.id);
        setPageCount(Math.ceil(response.data.data.length / PAGE_LIMIT));
        return response.data
    });
    const { mutate: cancelMutate, isLoading: rejectLoading } = requestStore.cancelRequest();
    const { mutate: deleteMutate, isLoading: deleteLoading } = requestStore.deleteRequest();

    const offset = currentPage * PAGE_LIMIT;
    const currentData = Array.isArray(userRequests?.data) ? userRequests?.data.slice(offset, offset + PAGE_LIMIT) : [];
    const handlePageClick = ({ selected: selectedPage }: { selected: number }) => {
        setCurrentPage(selectedPage);
    };
    const handleCancel = (id: number) => {
        alert(id)
        cancelMutate(id);
        toast.success(`Request with an id of ${id} is cancelled!`)
        refetch();
    }
    const handleDelete = (id: number) => {
        alert(id)
        deleteMutate(id);
        toast.success(`Request with an id of ${id} is deleted!`)
        refetch();
    }

    const [showEdit, setShowEdit] = useState(false);
    const [showCard, setShowCard] = useState(false);
    // Optimize these codes
    const [formData, setFormData] = useState<UpdateRequest>({
        id: 0,
        checkIn: '',
        checkOut: '',
        roomId: 0
    });

    const handleEditClick = (data: UpdateRequest = {
        id: 0,
        checkIn: '',
        checkOut: '',
        roomId: 0
    }) => {
        setFormData({
            id: data?.id ? data.id : 0,
            checkIn: data?.checkIn ? data.checkIn : "",
            checkOut: data?.checkOut ? data.checkOut : "",
            roomId: data?.roomId ? data.roomId : 0
        });
        setShowEdit(true);
    };

    const handleEditClose = () => {
        setShowCard(false);
        setShowEdit(false);
    };
    const handleAddClick = () => {
        setShowCard(true);
    }

    return (
        <div className={`${showCard || showEdit ? 'bg-[#00000011]' : 'bg-white'} text-gray-700 p-8 rounded-lg text-sm`}>
            <div className='flex justify-between'>
                <h1>Requests</h1>
                <Button onClick={handleAddClick} className='justify-self-center mx-32 mb-2'>New Reqest</Button>
            </div>
            {showCard && (
                <AddRequest
                    refetch={refetch}
                    onClose={handleEditClose} />
            )}
            {(reqLoading || isFetching) ? <div>Loading...</div> :
                <div>
                    <div className='grid grid-cols-9 gap-2 py-3 font-bold'>
                        <h4>User Names</h4>
                        <h4>Room Name</h4>
                        <h4>Check In Date</h4>
                        <h4>Check Out Date</h4>
                        <h4>Created At</h4>
                        <h4>Status</h4>
                        <div className='mx-4'>
                            <h4>Actions</h4>
                        </div>
                    </div>
                    {currentData && currentData.map((req: RequestInfo, index: number) => {
                        const fullName = `${userData.firstName} ${userData.lastName}`;

                        return (
                            <div className='grid grid-cols-9 py-3 gap-2' key={index}>
                                <p className='truncate'>{fullName}</p>
                                <p className='text-center'>{req.Room.name}</p>
                                <p className='truncate'>{req.checkIn.toString().substring(0, 10)}</p>
                                <p className='truncate'>{req.checkOut.toString().substring(0, 10)}</p>
                                <p className='truncate'>{req.createdAt.toString().substring(0, 10)}</p>
                                <p className={`${req.status == RequestStatuses.REJECTED || req.status == RequestStatuses.CANCELLED ? 'text-[#FF1111]' : 'text-[#3C4DE9]'} 
                                ${req.status == RequestStatuses.APPROVED && 'text-green-600'} lowercase`}>{req.status}</p>
                                <Button className='mx-2' disabled={isFetching || req.status !== RequestStatuses.PENDING} onClick={() => handleCancel(req.id)}>Cancel</Button>
                                <Button onClick={() => handleEditClick(req)} className='mx-2 bg-blue-500' disabled={isFetching || req.status !== RequestStatuses.PENDING}>Update</Button>
                                <Button onClick={() => handleDelete(req.id)} className='mx-2 bg-red-600' disabled={isFetching}>Delete</Button>
                                {showEdit && (
                                    <EditRequest
                                        refetch={refetch}
                                        formData={formData}
                                        setFormData={setFormData}
                                        onClose={handleEditClose} />
                                )}
                            </div>
                        );
                    })}
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                </div>
            }
        </div>
    )
}



export default UserRequests