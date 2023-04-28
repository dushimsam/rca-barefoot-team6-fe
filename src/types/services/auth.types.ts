import type {UserInfo} from './user.types';

export type LoginInfo = {
	email: string;
	password: string;
};

export type LoginRes = {
	message: string;
	token: string;
};

export type ResetPasswordInfo = {
	phoneNumber: string;
	password: string;
	code: string;
};