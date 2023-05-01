import { useMutation } from 'react-query';
import { authService } from '../services/auth.service';
import { EditRoleType, EditUserType } from '../types/services/user.types';
import { AxiosRequestConfig } from 'axios';
class AuthStore {
	async updateUser(updatedUser: EditRoleType | EditUserType, id: number, config?: AxiosRequestConfig) {
		try {
			const response = await authService.updateUser(updatedUser, id, config);
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log("Error: ", error);
			throw new Error('Failed to update user');
		}
	}
	logout() {
		return useMutation(authService.logout);
	}
	login() {
		return useMutation(authService.login);
	}
	register() {
		return useMutation(authService.register);
	}
	createPasswordReset() {
		return useMutation(authService.createPasswordReset);
	}

	resetPassword() {
		return useMutation(authService.resetPassword);
	}
}
export default new AuthStore();