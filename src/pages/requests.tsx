import { requestStore } from '../store/request.store'

export default function RequestsPage() {
    const { data, isLoading: dataLoading, refetch, isRefetching: dataIsRefetching } = requestStore.getAllRequests();
    const {mutate: approveMutate, isLoading: approveLoading} = requestStore.approveRequest();
    const {mutate: rejectMutate, isLoading: rejectLoading} = requestStore.rejectRequest();

    const handleApprove = (id: number) => {
        alert(id)
        approveMutate(id);
        refetch();
    }

    const handleReject = (id: number) => {
        alert(id)
        rejectMutate(id);
        refetch();
    }

  return (
    <div>
        <h1>Requests</h1>
        {(dataLoading||dataIsRefetching) ? <div>Loading...</div>:
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User name</th>
                    <th>Room name</th>
                    <th>Request Date</th>
                    <th>Check in date</th>
                    <th>Check out date</th>
                    <th>Status</th>
                    <th rowSpan={3}>Actions</th>
                </tr>
            </thead>
            <tbody>
            {data?.data.map((request) => (
                <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.User.firstName+' '+request.User.lastName}</td>
                    <td>{request.Room.name}</td>
                    <td>{request.createdAt}</td>
                    <td>{request.checkIn}</td>
                    <td>{request.checkOut}</td>
                    <td className='p-3'>{request.status}</td>
                    <td rowSpan={3} className='flex gap-3 p-3'>
                        <button className='bg-blue-600' disabled={
                            dataIsRefetching
                        } onClick={()=>handleApprove(request.id)}>Approve</button>
                        <button disabled={
                            dataIsRefetching
                        } className='bg-red-600' onClick={()=>handleReject(request.id)}>Reject</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        }
    </div>
  )
}
