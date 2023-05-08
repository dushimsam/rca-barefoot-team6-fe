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
        } catch (error: any) {
            console.log("Error", error?.response?.data?.message);

            toast.error(error ? error?.response.data?.message : 'Email couldn\'t be verified');
        }
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className='flex text-center justify-center items-center mt-32'>
                <div className='bg-white p-10 rounded max-w-xl py-8'>

                    <Button onClick={handleVerifyEmail}>Verify Email</Button>
                </div>
            </div>
        </div>
    );
}