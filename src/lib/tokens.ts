import { decode, type JwtPayload } from 'jsonwebtoken';

/*
export interface JWT {
	iss: string;
	sub: string;
	jti: string;
	iat: number;
	exp: number;
	context: {
		user: {
			name: string;
			email: string;
		};
		role: string;
	};
}
*/

declare module 'jsonwebtoken' {
	interface JwtPayload {
		context: {
			user: {
				name: string;
				email: string;
			};
			role: string;
		};
	}
}

export const isValidToken = (token: string | undefined): JwtPayload | false => {
	if (!token) return false;

	const payload = decode(token, { json: true });
	if (!payload) return false;

	
	const now = Date.now();
	
	if (
		!payload.exp ||
		!payload.iss ||
		!payload.sub ||
		!payload.jti ||
		!payload.iat
	)
	return false;
	
	if (payload.exp < now) return false;

	return payload;
};
