import React, { useState } from 'react'
import Input from './atoms/Input'
import { useNavigate } from 'react-router-dom';
import authStore from '../store/auth.store';
import { CreateUser } from '../types/services/user.types';
import { formValidate } from '../utils/validator';
import Button from './atoms/Button';

function ProfileSetting() {
    // const {mutate, isLoading} = authStore.register();
    const navigate = useNavigate();
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
    const [formData, setFormData] = useState<CreateUser>({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    })
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
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div className='px-16'>
            <h1 className='px-8 pt-8'>Account Settings</h1>
            <div className='bg-white text-gray-700 mt-4 mx-8 rounded-lg p-8'>
                <p className='font-bold'>My Profile</p>
                <p className='py-4'>Personal Information</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <Input
                        type="text"
                        name="firstName"
                        label='First Name'
                        id="firstName"
                        onChange={handleChange}
                        error={
                            (dataErrors && dataErrors.touched?.firstName) ? dataErrors.errors?.firstName : ''
                        }
                    />
                    <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        label='Last Name'
                        onChange={handleChange}
                        error={
                            (dataErrors && dataErrors.touched?.firstName) ? dataErrors.errors?.firstName : ''
                        }
                    />
                    <Input type="email"
                        label='Email'
                        name="email"
                        id="email"
                        onChange={handleChange}
                        error={dataErrors.touched.email && dataErrors.errors.email || ''} />
                    <Input
                        type="text"
                        name="role"
                        label='Role'
                        id="role"
                        onChange={handleChange}
                    />
                </div>
                <Button className='px-8 mt-4'>Save</Button>
            </div>
        </div>
    )
}

export default ProfileSetting