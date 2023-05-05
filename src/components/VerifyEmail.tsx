import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './atoms/Button';
import { authService } from '../services/auth.service';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import Navbar from './molecules/Navbar';

export default function VerifyEmail() {
    const { token } = useParams();
    const navigate = useNavigate();
    const handleVerifyEmail = async () => {
        try {
            const AuthToken = Cookies.get('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${AuthToken}`,
                }
            };
            const response = await authService.verifyEmail(token, config).then();
            toast.success('Email verified successfully');
            navigate('/auth/login')
            // handle the response data as needed
        } catch (error) {
            console.error('Error verifying email:', error);
            // handle the error as needed
            toast.error('Email couldn\'t be verified');
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex text-center justify-center items-center mt-32'>
                <div className='bg-white shadow rounded max-w-xl py-8'>
                    <h2>Your Verification Token:</h2>
                    {/* <div className='grid grid-cols-2 gap-4'>
                    <div> */}
                    <div className='w-2/3 break-words py-8 pl-4'>
                        <p className='text-xs text-center'>{token}</p>
                    </div>
                    <Button onClick={handleVerifyEmail}>Verify Email</Button>
                </div>
            </div>
        </div>
    );
}