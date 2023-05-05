export type CreateUser = {
	firstName: string;
	lastName: string;
	role?: string;
	email: string;
	password?: string;

};
export type EditUserType = {
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
}
export type EditRoleType = {
	id: number;
	role: string
}
export type createRequest = {
	roomId: number;
	checkIn: string;
	checkOut: string;
	status?: RequestStatus
}
export type RequestInfo = {
	userId: string;
	createdAt: string;
	updatedAt: string;
	length: number;
} & createRequest;

export type VerifyEmail = {
	token: string | undefined
}
export type UserInfo = {
	id: string;
	status: UserStatus;
	createdAt: string;
	updatedAt: string;
	length?: number;
} & CreateUser & EditRoleType;

export enum UserRole {
	SUPERADMIN = 'SUPERADMIN',
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export enum UserStatus {
	ACTIVE = 'ACTIVE',
}
export enum RequestStatus {
	PENDING = 'ACTIVE',
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED'
}