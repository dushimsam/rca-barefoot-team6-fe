import { useState } from "react";
import EditUser from "./EditUser";
import Button from "./atoms/Button";
import { EditUserType } from "../types/services/user.types";
import useProfileQuery from "../utils/useProfileQuery";

export default function ViewProfile(props: any | undefined) {
    const handleReturnClick = () => {
        props.onReturn();
    };
    const [showEdit, setShowEdit] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const { data, refetch } = useProfileQuery();
    const [formData, setFormData] = useState<EditUserType>({
        email: '',
        firstName: '',
        lastName: ''
    });
    const handleEditClick = (data: EditUserType = { email: "", firstName: "", lastName: "" }) => {
        setFormData({
            email: data?.email ? data.email : "",
            firstName: data?.firstName ? data.firstName : "",
            lastName: data?.lastName ? data.lastName : ""
        });
        setShowCard(true);
        setShowEdit(true);
    };

    const handleEditClose = () => {
        setShowCard(false);
        setShowEdit(false);
    };

    return (
        <div className={`${showCard || showEdit ? 'bg-[#00000011]' : 'bg-white'} flex flex-col items-center justify-center bg-gray-100`}>
            <div className={`${data?.role === 'ADMIN' ? 'flex justify-center mt-8' : 'hidden'}`}>
                <Button onClick={handleReturnClick}>Return to Main Dashboard</Button>
            </div>
            <h1 className="text-xl font-bold my-8">User Information</h1>
            <div className="bg-white p-8 rounded-lg max-w-3xl shadow-lg mx-56">
                <div className='bg-white text-gray-700 rounded-lg'>
                    <p className='font-bold pb-8 text-md text-black'>View Your Profile Information</p>
                    <div className='grid grid-cols-2 gap-8'>
                        <div><span className='font-medium'>First Name: </span><span className='px-8'>{data?.firstName}</span></div>
                        <div><span className='font-medium'>Last Name: </span><span className='px-8'>{data?.lastName}</span></div>
                        <div><span className='font-medium'>Email: </span><span className='px-8'>{data?.email}</span></div>
                        <div><span className='font-medium'>Role: </span><span className='px-8'>{data?.role}</span></div>
                        <Button onClick={() => handleEditClick(data)} className='bg-[#6487FE] text-white'>Edit Info</Button>
                    </div>
                </div>
                {showEdit && (
                    <EditUser
                        refetch={refetch}
                        userId={data?.id}
                        formData={formData}
                        setFormData={setFormData}
                        onClose={handleEditClose} />
                )}
            </div>
        </div>
    )
}
