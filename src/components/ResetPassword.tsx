import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = "http://localhost:3000/api"

function ResetPassword() {
    const [email, setEmail] = useState('');
    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            // Make a POST request to initiate password reset
            const response = await axios.post(`${BASE_URL}/users/request-password-reset`, { email });
            console.log(response.data); // You can handle the response here as needed
            
        } catch (error) {
            console.error(error);
        }
    };
    return (
        // my-36 md:my-24 lg:my-24
        <div className=' shadow rounded-xl card p-8'>
            <h1 className='font-bold text-center text-lg'>Request New Password</h1>
            <p className='py-2 text-center font-light'>Please enter your email</p>
            <form onSubmit={handleFormSubmit} className='pt-6'>
                <input type="email" placeholder='Email' className='pl-4 border py-2 rounded w-80 border-gray-200' name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <div className='flex pt-8 justify-center'>
                    <button type="submit" className='text-white px-32 py-2 rounded bg-[#3C4DE9]'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ResetPassword;