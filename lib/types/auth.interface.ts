import { IUser } from "./user.interface";

export interface IAuthUser {
	user: IUser;
	accessToken: string;
	refreshToken: string;
}
