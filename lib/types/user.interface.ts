export interface IUser {
	id: string;
    createdAt: Date;
    updatedAt: Date;
    role: [];
    phone: string;
    name: string;
    password: string;
    email: string | null;
    avatarPath: string;
    sellerId: string | null;
}
