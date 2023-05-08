import React, { FormEvent, useState } from 'react'
import { UpdateRequest } from '../../types/services/request.types';
import { formValidate } from '../../utils/validator';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { requestStore } from '../../store/request.store';
import { toast } from 'react-hot-toast';
interface EditRequestProps {
    refetch: Function;
    onClose: Function;
    formData: UpdateRequest;
    setFormData: React.Dispatch<React.SetStateAction<UpdateRequest>>;
}
const EditRequest: React.FC<EditRequestProps> = (props) => {
    const { setFormData, formData, refetch, onClose } = props
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const { mutate: updateMutate, isLoading: rejectLoading } = requestStore.updateRequest();
    const [dataErrors, setDataErrors] = useState<{
        touched: {
            [key: string]: boolean
        },
        errors: {
            [key: string]: string
        },
        hasError: boolean
    }>({
        touched: {},
        errors: {},
        hasError: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // check error
        const validateErrors = formValidate({ ...formData, [name]: value }, name);
        setDataErrors(previousErrors => {
            return {
                ...previousErrors,
                touched: {
                    ...previousErrors.touched,
                    [name]: true
                },
                errors: {
                    ...previousErrors.errors,
                    [name]: validateErrors.errors[name]
                },
                hasError: validateErrors.hasError
            }
        });
        setFormData((prevState: any) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEditClose = () => {
        onClose();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const validateErrors = formValidate(formData);
        console.log("form data: ", formData);

        setDataErrors(validateErrors);
        if (validateErrors.hasError) return;
        const toastId = toast.loading('Updating...');
        updateMutate(formData, {
            onSuccess: (_) => {
                toast.success('You have updated your request!', {
                    id: toastId
                })
                refetch();
            },
            onError: (error) => {
                toast.error(
                    // @ts-ignore
                    Array.isArray(error?.response?.data) ? error?.response?.data?.error[0] : error?.response?.data?.error
                        || 'Failed to update',
                    {
                        id: toastId
                    }
                )
            }
        });
    }


    return (
        <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative py-2 bg-white rounded-xl shadow-2xl dark:bg-gray-700">
                    <button type="button" onClick={handleEditClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <form onSubmit={handleSubmit} className='bg-white text-gray-700 mx-8 rounded-lg p-6'>
                        <p className='font-bold pb-4 text-lg'>Update User</p>
                        <div className='grid grid-cols-1 gap-4'>
                            <Input
                                type="number"
                                defaultValue={formData.roomId}
                                name="roomId"
                                label='Room Id'
                                id="roomId"
                                onChange={handleChange}
                                error={
                                    (dataErrors && dataErrors.touched?.roomId) ? dataErrors.errors?.roomId : ''
                                }
                            />
                            <Input
                                type="date"
                                name="checkIn"
                                className='pt-3'
                                defaultValue={formatDate(formData.checkIn)}
                                id="checkIn"
                                label='Check In Date'
                                onChange={handleChange}
                                error={
                                    (dataErrors && dataErrors.touched?.checkIn) ? dataErrors.errors?.checkIn : ''
                                }
                            />
                            <Input type="date"
                                label='Check Out Date'
                                defaultValue={formatDate(formData.checkOut)}
                                name="checkOut"
                                className='pt-3'
                                id="checkOut"
                                onChange={handleChange}
                                error={dataErrors.touched.checkOut && dataErrors.errors.checkOut || ''} />
                        </div>
                        <Button className='px-32 mt-4'
                            disabled={dataErrors.hasError}>
                            Save
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditRequest  